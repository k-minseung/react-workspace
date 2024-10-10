import React from 'react';
import { useState,useEffect } from 'react';
import './css/style.css'
import { call } from './service/ApiService';
import AddProduct from './AddProduct';

function Product_info() {
    // 상품정보를 가지고 있는 state
    const[items, setItems] = useState([])
    // 추가창을 띄우는 state
    const[open , setOpen] = useState(true)

    const addItem = (newProduct) => {
        // 새 상품을 추가하고 상태 업데이트
        setItems((prevItems) => [...prevItems, newProduct]);
        setOpen(true); // 추가 후 상품 목록 보기로 돌아가기
    };
    
    useEffect(()=>{
        //백엔드에 요청해서 조회
        call("/products","GET")
        .then(result => {
            setItems(result.data)
        })
    },[])

    
    

    let ProductItems = items.length > 0 && (
        <div>
            <table border="1">
                <tr>
                    <th>상품 번호</th>
                    <th>상품 이름</th>
                    <th>상품 재고</th>
                    <th>상품 가격</th>
                    <th>등록 날짜</th>
                    <th>수정 날짜</th>
                </tr>
                {items.map((item) => (
                    // DB에 넘어온 상품들을 출력
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.stock}</td>
                    <td>{item.price}</td>
                    <td>{item.insertDate}</td>
                    <td>{item.updateDate}</td>
                </tr>
                    // DB에 넘어온 상품들을 출력
                ))}
            </table>
        </div>
    )

    const onButtonClick = () => {
        setOpen(false);
    }

    let addProduct = <button type="button" onClick={onButtonClick}>상품추가</button>
    let addProductScreen = <AddProduct addItem={addItem} setOpen={setOpen}/>
    let addButton = addProduct;

    if(!open){
        addButton = addProductScreen;
    }

    return(
        <div className='container'>
            {addButton}
            {ProductItems}
        </div>
    );
}

export default Product_info;
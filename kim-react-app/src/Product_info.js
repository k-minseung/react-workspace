import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { call } from './service/ApiService';
import App from './App';

function Product_info(){

    const[items, setItems] = useState([]);


    useEffect(()=>{
        call("/products","GET")
        .then(result => {
            setItems(result.data)
        })
    },[])


    let Products = items.length > 0 && (
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
                <tr>
                    <td>{item.productId}</td>
                    <td>{item.productName}</td>
                    <td>{item.productStock}</td>
                    <td>{item.productPrice}</td>
                    <td>{item.registerDate}</td>
                    <td>{item.updateDate}</td>
                </tr>
                ))}
            </table>
        </div>
    )

    
    let addButton = <button type="button">상품추가</button>

    return(
        <div>
            {App}
            {addButton}
            {Products}
        </div>
    )
}
export default Product_info;

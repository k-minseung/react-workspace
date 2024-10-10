import React from "react";
import { useState } from "react";

function AddProduct (props) {
    const [product, setProduct] = useState({Name : "",Stock:0,Price:0});

    const {name,stock,price} = product;

    let addItem = props.addItem;

    
    const onChange = (e) => {    
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출    
        setProduct({      
            ...product, // 기존의 input 객체를 복사한 뒤      
            [name]: value // name 키를 가진 값을 value 로 설정    
        });  
    };
    const onButtonClick = ()=>{
        console.log(product);
        addItem(product);
        resetFields();
        props.setOpen(true);
    }   
    // 입력 필드 초기화 함수
    const resetFields = () => {
        setProduct({ name: "", stock: 0, price: 0 });
    };


    return(
        <div className="register-wrap" style={{width:'500px'}}>
			<div><input style={{width: '98%'}} value={name} onChange={onChange} name='name' placeholder='상품 이름'/></div>
			<div><input style={{width: '98%'}} value={stock} onChange={onChange} name='stock' placeholder='상품 재고'/></div>
			<div><input style={{width: '98%'}} value={price} onChange={onChange} name='price' placeholder='상품 가격'/></div>
			<input type="button" value="등록" onClick={onButtonClick} style={{width:'100%'}} />
		</div>
    )
}
export default AddProduct;
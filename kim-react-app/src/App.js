import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import { call } from './service/ApiService';


function App(props) {
  let setItems = props.setItems;

  const[product, setProduct] = useState({productName:'',productStock:0,productPrice:0});
  const {productName,productStock,productPrice} = product;
  
  const onChange = (e) =>{
    const{value,name} = e.target
    setProduct({
      ...product,[name]:value
    })
  }

  const onButtonClick = () =>{
    call('/products','POST',product)
    .then(result => {setItems(result.data)})

    setProduct({productName:'',productStock:0,productPrice:0})
  }


  return (
    <div>
            <div><input onChange={onChange} value={productName} name='productName' placeholder="상품이름"/></div>
            <div><input onChange={onChange} value={productStock} name='productStock' placeholder="상품재고"/></div>
            <div><input onChange={onChange} value={productPrice} name='productPrice' placeholder="상품가격"/></div>
            <input type="button" value="등록" onClick={onButtonClick} />
        </div>
  );
}

export default App;

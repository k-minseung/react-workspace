import './App.css';
// Redux 와 React를 연결하는데 필요한 rovider, useDispatch, useSelector들을 import
import { Provider, useDispatch, useSelector } from 'react-redux';
// Redux 스토어를 import. 이 스토어는 전역 상태를 관리함

import store from './todo/store';
// 액션 생성 함수를 import
// 아래 함수들은 상태를 변경하는 액션을 dispatch하기 위해 사용
import { increment, decrement } from './redux/actions';
import { addTodo, removeTodo } from './todo/actions'
import React,{useState} from 'react';
import { login,logout } from './login/actions';
import { addToCart,removeToCart } from './cart/actions';
// function Counter () {
//    //useSelector : Redux에서 store에 저장되어 있는 state를 읽어오는 hook
//    const count = useSelector(state=>state.count);

//    //useDispatch : store에 action을 보낼 수 있는 hook
//    const dispatch = useDispatch(); 

//    return (
//     <div>
//       {/* 현재 상태인 count 값을 화면에 출력함 */}
//       <h1>Counter : {count}</h1>
//       {/* Increment 버튼을 클릭하면 increment 액션을 디스패치함 */}
//       <button onClick={()=>dispatch(increment())}>Increment</button>
//       {/* Decrement 버튼을 클릭하면 decrement 액션을 디스패치함 */}
//       <button onClick={()=>dispatch(decrement())}>Decrement</button>
//     </div>
//   );
// }

function App() {
  const products = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
  ];
  const cart = useSelector((state) => state.cart); // Redux에서 쇼핑카트 상태를 가져옴
  const dispatch = useDispatch();

  // //추가 버튼을 눌렀을 때 input태그에 있는 내용을 배열에 추가하기
  // const handleAddTodo = () => {
  //   if(input.trim()){//input태그의 값이 비었는지 검사
  //     dispatch(addTodo(Date.now(),input)) // id와 내용을 액션에 전송해서 dispatch가 reducer로 전송
  //     setInput('')//입력창 비우기

  //   }
  // }

  
  // const handleRemoveTodo=(id) => {
  //   dispatch(removeTodo(id)) // Todo를 삭제
//--------------------------------------------------------------------------------------------------
  // }
  // const handleLogin = () => {
  //   if (usernameInput.trim()) {
  //     dispatch(login(usernameInput)); // 로그인 액션 디스패치
  //     setUsernameInput(''); // 입력 필드 초기화
  //   }
  // };

  // const handleLogout = () => {
  //   dispatch(logout()); // 로그아웃 액션 디스패치
  // };

  const handleAddToCart = (id, name) => {
    dispatch(addToCart(id, name)); // 제품을 카트에 추가
  };

  const handleRemovetoCart = (id) => {
    dispatch(removeToCart(id)); // 제품을 카트에서 제거
  };

  return (
    <div>
      <h1>products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => handleAddToCart(product.id, product.name)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} (+{item.quantity})
              <button onClick={() => handleRemovetoCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default App;

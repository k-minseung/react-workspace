//리듀서(reducer) : 액션에 따라 상태를 변경하는 순수함수
//리듀서의 기본구조
//현재상태(state)와 액션(action) 두가지 인자를 가지는 함수

//초기값 지정을 위해 만든 객체
const initialState = { count: 0 };

//state가 undefind일 경우, initialState를 기본값으로 사용해라
const counterReducer = (state = initialState, action) => {
    //액션의 타입에 따라 상태를 변경하기 위해 switch문 사용
    switch (action.type) {
        // 'INCREMENT' 액션일 경우, count 값을 1 증가시킨 새로운 상태를 반환함.
        case 'INCREMENT':
            return {
                ...state, // 기존 상태를 복사하고
                count: state.count + 1 // count 값을 1 증가시킴
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
        // 일치하는 액션이 없을 경우, 현재 상태를 그대로 반환.
        default:
            return state;
    } //switch 문 end
};

export default counterReducer;

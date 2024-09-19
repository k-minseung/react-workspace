import React, {useRef} from 'react'


function FocusInput(){
    // useRef를 사용하여 input 요소에 대한 레퍼런스 생성
    const inputRef = useRef(null);


    // 클릭했을 떄 함수
    const handleClick = () => {

        inputRef.current.focus();
    }
    return(
        <div>
            {/* ref={ 변수명 }을 하면  { current : 태그의 정보}가 된다 */}
            <input ref = {inputRef} type='text' />
            <button onClick={handleClick}>Focus the input</button>
        </div>
    )
}

export default FocusInput;

import React, {useState} from 'react';

function Sol1(){
    const [ eating, SetEating] = useState(['초콜렛','사탕'])
    const[value, SetValue] = useState("");

    const inputHandler = (e) => {
        SetValue(e.target.value)
    }

    const clickHandler = () => {
        SetEating(eating => [value, ...eating])
    }
    return (
        <div>
            <input onChange={inputHandler} type="text"/>
            <button onClick={clickHandler}>추가</button>
            <ul>
                {eating.map((item) =>(
                    <li style={{listStyle : 'none'}}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Sol1;
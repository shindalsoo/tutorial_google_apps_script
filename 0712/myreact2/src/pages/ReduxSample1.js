import React, { useState } from "react";
import "../App.css";

const ReduxSample1 = () => {
    const [num, setNum] = useState(0);
    return (
        <div id="conteiner">
            <h1>오늘은 리덕스 필요성 느끼기</h1>
            <Left1
                num={num}
                onIncrease={() => {
                    setNum(num + 1)
                }}
            />
        </div>
    )
}

function Left1(props) {
    return (
        <div>
            <h1>Left1 : {props.num}</h1>
            <Left2
                num={props.num}
                onIncrease={() => props.onIncrease()}
            />
        </div>
    )
}

function Left2(props) {
    return (
        <div>
            <h1>Left2</h1>
            <Left3
                num={props.num}
                onIncrease={() => props.onIncrease()}
            />
        </div>
    )
}

function Left3(props) {
    return (
        <div>
            <h1>Left3</h1>
            <button onClick={() => props.onIncrease()}>1++</button>
        </div>
    )
}

export default ReduxSample1;
import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'InAmt': //입금
            return state + action.payload;
        case 'OutAmt': //출금
            return state - action.payload;
        default:
            return state;
    }
}
const ReducerSimple = () => {
    const [amt, setAmt] = useState(0);
    const [Janac, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <h1>useReducer</h1>
            <p>잔액 : {Janac}</p>            
            <p>입력금액 : {amt}</p>
            <input
                type="number"
                step="1000"
                value={amt}
                onChange={(e) => setAmt(parseInt(e.target.value))}
            />
            <button onClick={()=> dispatch({type:'InAmt', payload: amt})}>입금</button>
            <button onClick={()=> dispatch({type:'OutAmt', payload: amt})}>출금</button>
        </>
    )
}

export default ReducerSimple;
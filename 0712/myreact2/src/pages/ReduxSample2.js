import React from "react";
import "../App.css";
import { legacy_createStore as createStore, } from "redux";
import {
    Provider, //어떤 컴포넌트에 전달할지 영역 지정
    useSelector, // 값을 가져오는
    useDispatch //값을 변경하는(고객의 요구사항)
} from "react-redux";

const store = createStore(reducer);

function reducer(currentState, action) { //실제 바꾸는 함수
    const newState = { ...currentState };

    if (currentState === undefined) {
        return { number: 0 }
    } else if (action.type === 'PLUS') {
        newState.number++;
    } else if (action.type === 'MINUS') {
        newState.number--;
    }

    return newState;
}

const ReduxSample1 = () => {
    return (
        <div id="conteiner">
            <h1>오늘은 리덕스 필요성 느끼기</h1>
            <Provider store={store}>
                <Left1 />
            </Provider>
        </div>
    )
}

function Left1() {
    const number = useSelector((state) => state.number)
    return (
        <div>
            <h1>Left1 : {number}</h1>
            <Left2 />
        </div>
    )
}

function Left2() {
    return (
        <div>
            <h1>Left2</h1>
            <Left3 />
        </div>
    )
}

function Left3() {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Left3</h1>
            <button onClick={() => {
                dispatch({ type: 'PLUS' })
            }}>1++</button>
            <button onClick={() => {
                dispatch({ type: 'MINUS' })
            }}>1--</button>
        </div>
    )
}

export default ReduxSample1;
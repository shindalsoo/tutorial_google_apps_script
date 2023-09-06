import React, { useState, useReducer } from "react";
import Student from "./Student";

const reducer = (state, action) => {
    switch (action.type) {
        case 'add-student':
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name, //key == value 면 value 생략
                isHere: false
            };
            return {
                count: state.count + 1,
                students: [...state.students, newStudent]
            }
        case 'delete-student':
            return {
                count: state.count - 1,
                students: state.students.filter(
                    (student) => student.id !== action.payload.id
                )
            }
        case 'mark-student':
            return {
                count: state.count,
                students: state.students.map((student) => {
                    if (student.id === action.payload.id) {
                        return { ...student, isHere: !student.isHere }
                    }
                    return student;
                })
            }
        default:
            return state;
    }
}

const initialState = {
    count: 0,
    students: []
}

const Attendance = () => {
    const [name, setName] = useState("");
    const [studentInfo, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>덕영고등학교 출석부</h2>

            <p>총 학생 수 : {studentInfo.count}</p>

            <input
                type="text"
                placeholder="이름을 입력하세요."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={() => {
                dispatch({ type: 'add-student', payload: { name } })
                setName("");
            }}>추가</button>

            {studentInfo.students.map((student) => {
                return (
                    <div>
                        <Student
                            dispatch={dispatch}
                            name={student.name}
                            id={student.id}
                            isHere={student.isHere}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Attendance;
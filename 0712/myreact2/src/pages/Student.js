import React from "react";

const Student = ({ dispatch, name, id, isHere }) => {
    return (
        <div>
            <span
                style={{
                    textDecoration: isHere ? 'line-through' : 'none',
                    color: isHere ? 'gray' : 'black'
                }}>{name}
            </span>
            <button
                onClick={() => {
                    dispatch({
                        type: 'delete-student',
                        payload: { id }
                    })
                }}>삭제
            </button>
            <button
                onClick={() => {
                    dispatch({ type: 'mark-student', payload: { id } });
                }}>출석
            </button>
        </div>
    )
}

export default Student;
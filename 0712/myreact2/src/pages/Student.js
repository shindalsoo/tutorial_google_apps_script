import React from "react";

const Student = ({ dispatch, name, id }) => {
    return (
        <div>
            <span>{name}</span>
            <button 
                onClick={() => {
                    dispatch({
                        type: 'delete-student',
                        payload: {id},
                    });
            }}>삭제</button>
        </div>
    )
}

export default Student;
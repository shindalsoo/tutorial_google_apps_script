import React from "react";

const UserList = () => {
    const User = ({userData}) => {
        return (
            <tr>
                <td>{userData.name}</td>
                <td>{userData.email}</td>
            </tr>
        );
    }

    const users = [
        {name : '라호성', email : 'hosung@naver.com'},
        {name : '신예은', email : 'yeeun@naver.com'},
        {name : '장윤서', email : 'yoon@naver.com'},
        {name : '신승호', email : 'hoing@naver.com'}
    ]
    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user} />)}
            </tbody>
        </table>
    );
}

export default UserList;
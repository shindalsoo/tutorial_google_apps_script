import React from "react";

function Header(props) {
    return (
        <h1>
            <a href="/">
                {props.title}
            </a>
        </h1>
    )
}

function Nav(props) {
    const lis = [];

    for (let i = 0; i < props.menus.length; i++) {
        lis.push(<li>{props.menus[i].title},{props.menus[i].body}</li>)
    }
    return (
        <>
            <h1>{props.title}</h1>
            <ol>
                {
                    //첫번째 방식
                    // props.menus.map(function (menus) {
                    //     return <li>
                    //         {menus.title}
                    //         {menus.body}
                    //     </li>
                    // })

                    //두번째 방식
                    // props.menus.map(menus => <li>{menus.title},{menus.body}</li>) 

                    //세번째 방식
                    lis
                }
            </ol>
        </>
    )
}

function PropsSample() {
    const topics = [
        { id: 1, title: "html", body: " : html..." },
        { id: 2, title: "css", body: " : css..." },
        { id: 3, title: "js", body: " : js..." }
    ]

    const burgers = [
        { id: 1, title: "맘스터치", body: " : 맘스터치..." },
        { id: 2, title: "맥도날드", body: " : 맥도날드..." },
        { id: 3, title: "롯데리아", body: " : 롯데리아..." }
    ]
    return (
        <div>
            <Header title="Web"></Header>
            <Nav menus={topics}></Nav>

            <Nav menus={burgers} title="오늘 메뉴는?"></Nav>
        </div>
    )
}

export default PropsSample;
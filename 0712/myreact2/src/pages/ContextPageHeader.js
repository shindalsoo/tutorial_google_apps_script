import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { UserContext } from "./UserContext";

const ContextPageHeader = () => {
    const { darkTheme } = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <header className="header"
            style={{
                backgroundColor: darkTheme.isDark ? "black" : "white",
                color: darkTheme.isDark ? "white" : "black",
            }}>
            <h1>환영합니다. {user}님</h1>
        </header>
    )
}

export default ContextPageHeader;
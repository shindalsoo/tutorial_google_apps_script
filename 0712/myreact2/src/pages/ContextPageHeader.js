import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { UserContext } from "./UserContext";

const ContextPageHeader = () => {
    const { isDark } = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <header className="header"
            style={{
                backgroundColor: isDark ? "black" : "white",
                color: isDark ? "white" : "black",
            }}>
            <h1>환영합니다. {user}님</h1>
        </header>
    )
}

export default ContextPageHeader;
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"
import { UserContext } from "./UserContext";

const ContextPageContent = () => {
    const { darkTheme } = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <div className="content"
            style={{
                backgroundColor: darkTheme.isDark ? "black" : "white",
                color: darkTheme.isDark ? "white" : "black",
            }}>
            <p>{user}님, 좋은 하루 되세요.</p>
        </div>
    )
}

export default ContextPageContent;
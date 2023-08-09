import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ContextPageFooter = () => {
    const { isDark , setIsDark } = useContext(ThemeContext);

    const toggleTheme = () => {
        setIsDark();
    }

    return (
        <footer className="footer"
            style={{
                backgroundColor: isDark ? "black" : "white",
            }}>

            <button className="button" onClick={toggleTheme}>
                Dark Mode
            </button>

        </footer>
    )
}

export default ContextPageFooter;
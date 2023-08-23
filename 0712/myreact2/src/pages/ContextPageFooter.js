import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ContextPageFooter = () => {
    const { darkTheme } = useContext(ThemeContext);

    

    const toggleTheme = () => {
        darkTheme.setIsDark();
        console.log(darkTheme.isDark);
    }

    return (
        <footer className="footer"
            style={{
                backgroundColor: darkTheme.isDark ? 'black' : 'white',
            }}>

            <button className="button" onClick={toggleTheme}>
                Dark Mode
            </button>

        </footer>
    )
}

export default ContextPageFooter;
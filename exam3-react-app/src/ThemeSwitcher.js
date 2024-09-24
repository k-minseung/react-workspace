import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeSwitcher() {
    const { isDarkMode, OnOff } = useContext(ThemeContext);

    return (
        <button onClick={OnOff}>
            {isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
        </button>
    );
}
export default ThemeSwitcher;
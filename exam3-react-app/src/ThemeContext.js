import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, SetDarkMode] = useState(false)
    const OnOff = () => {
        SetDarkMode(isDarkMode => !isDarkMode)
    }
    return (
        <ThemeContext.Provider value={{ isDarkMode, OnOff }}>
            {children}
        </ThemeContext.Provider>
    );
}
export default ThemeContext;
import React, {ReactElement, useState} from "react";
import {ThemeContext} from './themeContext';
import {ThemeDispatchContext} from "./themeContext";
import {TTheme} from "../../types";


interface ThemeProviderProps{
    children:ReactElement;
}


export default function  ThemeProvider({children}:ThemeProviderProps) {
    const [theme,setTheme]= useState<TTheme>("light");
    return(
        <ThemeContext.Provider value={theme}>
            <ThemeDispatchContext.Provider value={setTheme}>
                {children}
            </ThemeDispatchContext.Provider>
        </ThemeContext.Provider>
    )

}
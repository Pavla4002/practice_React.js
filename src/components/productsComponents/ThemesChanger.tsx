import React from "react";
import {TTheme} from "../../types";
import '../../styles/Purchases.css'

import {useTheme} from "../../hooks/useTheme";
import {useThemeDispatch} from "../../hooks/useThemeDispatch";

export default function ThemesChanger (){
    const theme = useTheme();
    const setTheme = useThemeDispatch();
    const handelChange: React.ChangeEventHandler<HTMLSelectElement> = (e) =>{
        console.log(e.target.value);
        setTheme(e.target.value as TTheme);
    }
    return(
        <>
            <div className="theme-changer">
                <select onChange={handelChange} value={theme}>
                    <option value="light">Светлая тема</option>
                    <option value="dark">Темная тема</option>
                </select>
            </div>

        </>
    )
}
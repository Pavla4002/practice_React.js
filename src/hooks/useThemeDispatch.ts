import {useContext} from "react";
import {ThemeDispatchContext} from "../context/Theme/themeContext";


export function useThemeDispatch(){
    return useContext(ThemeDispatchContext)
}
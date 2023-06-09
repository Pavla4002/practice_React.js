import {useContext} from "react";
import {ThemeContext} from "../context/Theme/themeContext";


export function useTheme(){
   return useContext(ThemeContext)
}
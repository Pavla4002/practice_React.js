import {createContext} from 'react'
import {TTheme} from '../../types'

export const ThemeContext = createContext<TTheme>("light");

export const ThemeDispatchContext = createContext<React.Dispatch<React.SetStateAction<TTheme>>>(() => {})
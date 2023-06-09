import {createContext} from 'react';
import {IActionProfile,IProfile} from "../../types";

export const ProfileContext = createContext<IProfile[]>([]);
export const ProfileDispatchContext = createContext<React.Dispatch<IActionProfile>>(() =>{});
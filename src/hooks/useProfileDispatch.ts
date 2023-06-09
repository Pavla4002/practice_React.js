import {useContext} from "react";
import {ProfileDispatchContext} from "../context/Profile/profileContext";

export const useProfileDispatch = () =>{
    return useContext(ProfileDispatchContext)
}
import {useContext} from "react";
import {ProfileContext} from "../context/Profile/profileContext";

export const useProfile = () =>{
    return useContext(ProfileContext)
}
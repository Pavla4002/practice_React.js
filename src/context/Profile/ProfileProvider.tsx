import React, {ReactElement, useReducer} from "react";
import {ProfileContext, ProfileDispatchContext} from "./profileContext";
import {profileReducer} from "../../store/profileReducer";

interface ProductProviderProps{
    children:ReactElement
}
const users = [
    {id:1,firstNameUser:"Ivan1",secondNameUser:"Nenau1", ageUser:12,favoriteQuote:"Ненависть – удел побежденных.",imageUser:"https://i.artfile.me/wallpaper/10-10-2017/1920x1080/multfilmy-ivan-carevich-i-seryj-volk-2-p-1246723.jpg"},
    {id:2,firstNameUser:"Ivan2",secondNameUser:"Nenau2", ageUser:22,favoriteQuote:"Ненависть – удел побежденных.",imageUser:"https://i.artfile.me/wallpaper/10-10-2017/1920x1080/multfilmy-ivan-carevich-i-seryj-volk-2-p-1246723.jpg"},
    {id:3,firstNameUser:"Ivan3",secondNameUser:"Nenau3", ageUser:32,favoriteQuote:"Ненависть – удел побежденных.",imageUser:"https://i.artfile.me/wallpaper/10-10-2017/1920x1080/multfilmy-ivan-carevich-i-seryj-volk-2-p-1246723.jpg"},
]

const ProfileProvider = ({children}:ProductProviderProps)=>{
    const [productList, dispatch] = useReducer(profileReducer, users);

    return(
        <ProfileContext.Provider value={productList}>
            <ProfileDispatchContext.Provider value={dispatch}>
                {children}
            </ProfileDispatchContext.Provider>
        </ProfileContext.Provider>
    );
};

export default ProfileProvider;
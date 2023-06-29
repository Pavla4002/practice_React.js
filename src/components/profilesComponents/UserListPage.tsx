import React from 'react';
import ProfileList from "./ProfileList";
import ProfileProvider from "../../context/Profile/ProfileProvider";
import FormProfile from "./FormProfile";


const UserListPage = () =>{
    return(
        <>
            <ProfileProvider>
                <FormProfile></FormProfile>
                <ProfileList></ProfileList>
            </ProfileProvider>
        </>
    )

}

export default UserListPage;
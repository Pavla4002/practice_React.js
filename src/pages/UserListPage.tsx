import React from 'react';
import ProfileList from "../components/profilesComponents/ProfileList";
import ProfileProvider from "../context/Profile/ProfileProvider";
import FormProfile from "../components/profilesComponents/FormProfile";


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
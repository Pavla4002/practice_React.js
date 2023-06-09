import React from 'react';
import ProfileList from "../components/profilesComponents/ProfileList";
import ProfileProvider from "../context/Profile/ProfileProvider";


const UserListPage = () =>{
    return(
        <>
            <ProfileProvider>
                <ProfileList></ProfileList>
            </ProfileProvider>
        </>
    )

}

export default UserListPage;
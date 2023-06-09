import Profile from "./Profile";
import {useProfile} from "../../hooks/useProfile";


export default function ProfileList(){
    const profiles  = useProfile()
    let listProfile = profiles.map(profile =>
        <Profile profile={profile}/>
        )
    return(
        <>
            <ul className="list-profile">
                {listProfile}
            </ul>
            <span>Количество пользователей: {listProfile.length}</span>
        </>
    )
}
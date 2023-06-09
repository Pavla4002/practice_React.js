import React from 'react';
import '../../styles/Profiles.css'
import {IProfile} from '../../types'
import MyButton from "../MyButton";
import {useProfileDispatch} from "../../hooks/useProfileDispatch";


interface ProfileProps{
  profile:IProfile
}

export default function Profile({profile}:ProfileProps){
    const dispatch = useProfileDispatch();
    const handleDelete: React.MouseEventHandler<HTMLButtonElement> = () =>{
        dispatch({
            type:"delete",
            payload:profile,
        })
    }
    return(
        <li className="user-box" key={profile.id}>
            <div className="info-user">
                <div className="image-user-box">
                    <img src={profile.imageUser} alt="logo" className="user-image"/>
                </div>
                <div className="main-info">
                    <p>Имя пользователя: {profile.firstNameUser}</p>
                    <p>Фамилия: {profile.secondNameUser}</p>
                    <p>Возраст: {profile.ageUser}</p>
                    <p>Любимая фраза: {profile.favoriteQuote}</p>
                </div>

            </div>
            <div className="btn-user-box">
                <MyButton onClick={handleDelete}>Удалить</MyButton>
                <MyButton>Редактировать</MyButton>
            </div>

        </li>
    );
}
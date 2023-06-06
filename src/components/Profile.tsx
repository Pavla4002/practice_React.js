import React from 'react';
import '../Profile.css'

const user = {
    name: 'Иван',
    age:22,
}

export default function Profile(){
    return(
        <div className="user-box">
            <img src="https://i.artfile.me/wallpaper/10-10-2017/1920x1080/multfilmy-ivan-carevich-i-seryj-volk-2-p-1246723.jpg" alt="logo" className="user-image"/>
            <p>Имя пользователя: {user.name}</p>
            <p>Возраст: {user.age}</p>
        </div>
    );
}
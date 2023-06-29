import MyInput from "../MyInput";
import MyButton from "../Button/MyButton";
import '../../styles/Profiles.css';
import React, {useState} from "react";
import {IProfile} from "../../types";
import {useProfileDispatch} from "../../hooks/useProfileDispatch";



const initValue: IProfile = {
    id:0,
    firstNameUser:'',
    secondNameUser:'',
    ageUser:0,
    favoriteQuote:'',
    imageUser:''
}

type TStatusForm = "empty" | "typing" | "error" | "submitting" | "success"
export default function FormProfile(){
    const dispatch = useProfileDispatch()

    const [status, setStatus] = useState<TStatusForm>("empty");
    const [profile,setProfile] = useState<IProfile>(initValue)
    const handleChange : React.ChangeEventHandler<HTMLInputElement> =(e) =>{
        if(e.target.value.length!== 0){
            setStatus("typing")
        }
        setProfile({
            ...profile,
            [e.target.name]:e.target.value
        });
    }
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) =>{
        e.preventDefault()
        dispatch({
            type: "add",
            payload: profile
        })
       setProfile(initValue)
    }


    return(
        <div className="form1">
            <div className="form-profile-box">
                <h2>Добавление пользователей</h2>
                <form className="form-profile" onSubmit={handleSubmit}>
                    <div className='input-box'>
                        <span>Имя:</span>
                        <MyInput  handleChange={handleChange} value={profile.firstNameUser} name="firstNameUser"/>
                    </div>
                    <div className='input-box'>
                        <span>Фамилия:</span>
                        <MyInput  handleChange={handleChange} value={profile.secondNameUser} name="secondNameUser"/>
                    </div>
                    <div className='input-box'>
                        <span>Возраст:</span>
                        <MyInput  type="number" handleChange={handleChange} value={profile.ageUser} name="ageUser"/>
                    </div>
                    <div className='input-box'>
                        <span>Любимая фраза:</span>
                        <MyInput   handleChange={handleChange} value={profile.favoriteQuote} name="favoriteQuote"/>
                    </div>
                    <div className='input-box'>
                        <span>Фото:</span>
                        <MyInput  handleChange={handleChange} value={profile.imageUser} name="imageUser"/>
                    </div>
                    <MyButton disabled={status!=="typing"} type="submit">Добавить</MyButton>
                </form>
            </div>
        </div>
    );
}
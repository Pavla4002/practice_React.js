import React from 'react';
import '../styles/Purchases.css'
import classNames from "classnames";
import {useTheme} from "../hooks/useTheme";

interface MyButtonProps{
    children:string,
    type?:"button" | "submit" | "reset",
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    disabled?: boolean
}

export default function MyButton({children,onClick,type ="button",disabled=false}:MyButtonProps){
    const theme = useTheme();
    const classForButton = classNames('btn',{"dark-btn" : theme==="dark"},{"light-btn" : theme==="light"})
    return(
            <button onClick={onClick} type={type} disabled={disabled} className={classForButton}>
                {children}
            </button>
    );
};
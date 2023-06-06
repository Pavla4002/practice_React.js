import React from 'react';
import '../Purchases.css'
import {IPurchases} from "../types/purchases";

interface MyButtonProps{
    children:string,
    type?:"button" | "submit" | "reset",
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
}

export default function MyButton({children,onClick,type ="button"}:MyButtonProps){
    return(
            <button onClick={onClick} type={type}>
                {children}
            </button>
    );
};
import React, {ReactElement} from 'react';
// import '../../styles/Purchases.css'
import styles from './index.module.scss'
import classNames from "classnames";
import {useTheme} from "../../hooks/useTheme";

interface MyButtonProps{
    children:string | ReactElement | ReactElement[];
    type?:"button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    disabled?: boolean;
}

export default function MyButton({children,onClick,type ="button",disabled=false}:MyButtonProps){
    const theme = useTheme();
    return(
            <button onClick={onClick} type={type} disabled={disabled} className={styles.btn}>
                {children}
            </button>
    );
};
import React from 'react';
import MyButton from "../../Button/MyButton";
// import 'styles/newStyle.css'
import styles from './index.module.css'
import {NavLink} from "react-router-dom";
import classNames from "classnames";

const PublicHeader = () => {
    const classForLink =({isActive, isPending}:{isActive: boolean, isPending: boolean})=>{
        return classNames(styles.linkNav, isActive ? styles.linkActive : styles.linkNav)
    }
    return (
        <div className={styles.areaHeader}>
            <div className={styles.headerContent}>
                <ul className={styles.ul}>
                    <li> <NavLink to="/" className={classForLink}>Главная</NavLink></li>
                    {/*<li> <NavLink to="/profiles" className={classForLink}>Профили</NavLink></li>*/}
                    <li> <NavLink to="/test" className={classForLink}>Тест-странца</NavLink></li>
                    <li> <NavLink to="/purchases" className={classForLink}>Продукты</NavLink></li>
                </ul>
                <div className={styles.btnAndLink}>
                    <NavLink to="/registration" className={classForLink}>Регистрация</NavLink>
                    <NavLink to="/authorization" className={classForLink}>Авторизация</NavLink>
                </div>
            </div>
        </div>
    );
};

export default PublicHeader;
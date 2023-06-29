import React from 'react';
import styles from './index.module.css';
import MyInput from "../../../components/MyInput";
import MyButton from "../../../components/Button/MyButton";
import {Form} from "react-router-dom";

const AuthorizationUsers = () => {

    new FormData()
    return (
        <div className={styles.bigModalBg}>
            <div className={styles.boxFormAuthorization}>
                <h2>Авторизуйтесь!</h2>
                <Form className={styles.formStructure} method="post" action="">
                    <MyInput name="email" placeholder="email"/>
                    <MyInput name="password" placeholder="password"/>
                    <MyButton type="submit">Авторизация</MyButton>
                </Form>
            </div>
        </div>
    );
};

export default AuthorizationUsers;
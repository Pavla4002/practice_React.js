import React from 'react';
import styles from './index.module.css'
import {Form} from "react-router-dom";
import MyInput from "../../../components/MyInput";
import MyButton from "../../../components/Button/MyButton";

const RegistrationPage = () => {
    return (
        <div className={styles.registrationPage}>
            <div className={styles.registrationContent}>
                <h1>Регистрация</h1>
                <Form className={styles.form}>
                    <MyInput name="email" placeholder="email"/>
                    <MyInput name="password" placeholder="password"/>
                    <MyInput name="passwordConfirmed" placeholder="passwordConfirmed"/>
                    <div className={styles.check}>
                        <span>Согласитесь просто</span>
                        <div className={styles.input}>
                            <div>
                                <input type="radio" id="y" name="nado" value="yes"/>
                                <label htmlFor="y">Да</label>
                            </div>
                            <div>
                                <input type="radio" id="n" name="nado" value="no"/>
                                <label htmlFor="n">Нет</label>
                            </div>

                        </div>

                    </div>
                    <div className={styles.btnR}>
                        <MyButton>Регистрация</MyButton>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default RegistrationPage;
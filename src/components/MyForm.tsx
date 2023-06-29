import React from 'react';
import MyButton from "./Button/MyButton";
import {Form} from "react-router-dom";
import MyInput from "./MyInput";
import '../styles/myForm.css'

const MyForm = () => {
    new FormData();
    return (
        <div>
            <Form action="" method="post">
                <div className="inputs-block-my-form">
                    <h2>Добавить продукт</h2>
                    <MyInput type="hidden" value="false" name="inCart"/>
                    <MyInput  type="text" name="name" placeholder="name"/>
                    <MyInput  type="number" name="count" placeholder="count"/>
                    <MyInput  type="number" name="cost" placeholder="cost"/>
                    <MyButton  type="submit">Отправить</MyButton>
                </div>
            </Form>
        </div>
    );
};

export default MyForm;



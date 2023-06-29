import React from 'react';
import MyInput from "./MyInput";
import MyButton from "./Button/MyButton";
import {Form, useLoaderData, useNavigate} from "react-router-dom";
import {IPurchases} from "../types";

const EditPurchaseForm = () => {
    const purchase = useLoaderData() as IPurchases;
    const navigate= useNavigate()
    const handleClickCancel=()=>{
        navigate(-1)
    }
    return (
        <Form action="" method="put">
            <div className="inputs-block-my-form">
                <h2>Редактировать данные о продукте</h2>
                <input type="hidden" value={purchase.inCart.toString()} name="inCart" />
                <MyInput  type="text" name="name" placeholder="name" defaultValue={purchase.name}/>
                <MyInput  type="number" name="count" placeholder="count" defaultValue={purchase.count}/>
                <MyInput  type="number" name="cost" placeholder="cost" defaultValue={purchase.cost}/>
                <MyButton  type="submit">Отправить</MyButton>
                <MyButton onClick={handleClickCancel}>Отменить</MyButton>
            </div>
        </Form>
    );
};

export default EditPurchaseForm;
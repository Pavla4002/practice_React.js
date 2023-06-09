import React from 'react';
import '../styles/Purchases.css'
import Mark from "./Mark";
import MyButton from "./MyButton";
import {IPurchases} from "../types";
import {useProductDispatch} from "../hooks/useProductDispatch";


interface purchasesProps{
    element:IPurchases;
}

const Purchases = ({element}: purchasesProps) =>{
    const dispatch = useProductDispatch()
    const handleDelete: React.MouseEventHandler<HTMLButtonElement> = () =>{
        dispatch({
            type:"delete",
            payload:element
        })
    }
    const handleIncrement:  React.MouseEventHandler<HTMLButtonElement> = () => {
        dispatch({
            type:"update",
            payload:{
                ...element,
                count: +element.count + 1
            }
        })
    }
    const handleDecrement:  React.MouseEventHandler<HTMLButtonElement> = () => {
       if(+element.count===1){
           dispatch({
               type:"delete",
               payload:element
           })
       }else {
           dispatch({
               type:"update",
               payload:{
                   ...element,
                   count: +element.count - 1
               }
           })
       }
    }
    const toggleCard = () =>{
        dispatch({
            type: "update",
            payload:{
                ...element,
                inCart: !element.inCart
            }
        })
    }
    return(
             <li key={ element.id}>
                <p>Название: {element.name}</p>
                <p>Стоимость: {element.cost}</p>
                <p>Количество: {element.count}</p>
                 <p>Общая стоимость: {element.count*element.cost}</p>
                 <div className="box-btn">
                     <MyButton onClick={toggleCard}>В корзину</MyButton>
                     <MyButton onClick={handleIncrement}>+</MyButton>
                     <MyButton onClick={handleDecrement}>-</MyButton>
                     <MyButton onClick={handleDelete}>Удалить</MyButton>
                 </div>
                <p>{element.inCart && <Mark/>}</p>
             </li>
    );
}

export default Purchases;

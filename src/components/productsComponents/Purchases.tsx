import React from 'react';
import '../../styles/Purchases.css'
import Mark from "./Mark";
import MyButton from "../MyButton";
import {IPurchases} from "../../types";
import {useProductDispatch} from "../../hooks/useProductDispatch";
import {useTheme} from "../../hooks/useTheme";
import classNames from "classnames";


interface purchasesProps{
    element:IPurchases;
}

const Purchases = ({element}: purchasesProps) =>{
    const theme = useTheme();
    const classForCard = classNames('li-class',{"dark-li" : theme==="dark"},{"light-li" : theme==="light"});
    const dispatch = useProductDispatch();
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
        console.log(element.id)
    }
    return(
             <li key={element.id} className={classForCard}>
                 <div className="mark">
                     <div>{element.inCart && <Mark/>}</div>
                 </div>
                <p>Название: {element.name}</p>
                <p>Количество: {element.count}</p>
                 <p>Стоимость: {element.cost}</p>
                 <p>Общая стоимость: {element.count*element.cost}</p>
                 <div className="box-btn">
                     <div className="small-box-btn">
                         <MyButton onClick={handleIncrement}>+</MyButton>
                         <MyButton onClick={handleDecrement}>-</MyButton>
                     </div>
                  <div className="small-box-btn">
                        <MyButton onClick={handleDelete}>Удалить</MyButton>
                        <MyButton onClick={toggleCard}>В корзину</MyButton>
                  </div>
                 </div>
             </li>
    );
}

export default Purchases;

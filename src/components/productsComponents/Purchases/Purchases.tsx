import React from 'react';
import styles from './index.module.css'
import Mark from "../Marck/Mark";
import MyButton from "../../Button/MyButton";
import {IPurchases} from "../../../types";
import {useProductDispatch} from "../../../hooks/useProductDispatch";
import {useTheme} from "../../../hooks/useTheme";
import classNames from "classnames";


interface purchasesProps{
    element:IPurchases;
}

const Purchases = ({element}: purchasesProps) =>{
    const theme = useTheme();
    const classForCard = classNames(styles.cardPurchase,{"darkLi" : theme==="dark"},{"lightLi" : theme==="light"}); // !!!!Как писать темы стили через styles
    // styles.cardPurchase
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
                 <div>
                     <div>{element.inCart && <Mark/>}</div>
                 </div>
                <p>Название:{element.name}</p>
                <p>Количество: {element.count}</p>
                 <p>Стоимость: {element.cost}</p>
                 <p>Общая стоимость: {element.count*element.cost}</p>
                 <div className={styles.boxBtn}>
                     <div className={styles.boxBtnCount}>
                         <MyButton onClick={handleIncrement}>+</MyButton>
                         <MyButton onClick={handleDecrement}>-</MyButton>
                     </div>
                  <div className={styles.blockBtnAction}>
                        <MyButton onClick={handleDelete}>Удалить</MyButton>
                        <MyButton onClick={toggleCard}>В корзину</MyButton>
                  </div>
                 </div>
             </li>
    );
}

export default Purchases;

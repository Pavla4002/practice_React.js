import React, {useState} from 'react';
import '../Purchases.css'
import Mark from "./Mark";
import MyButton from "./MyButton";
import {IPurchases} from "../types/purchases";


interface purchasesProps{
    element:IPurchases;
    onDecrement:React.MouseEventHandler<HTMLButtonElement> | undefined;
    onIncrement:React.MouseEventHandler<HTMLButtonElement> | undefined;
    count:number;
    // removeProduct:React.MouseEventHandler<HTMLButtonElement>
}

const Purchases = ({element,onDecrement, onIncrement,count}: purchasesProps) =>{
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) =>{
        console.log(element);
        console.log(e.target);
    }
    return(
             <li key={ element.id}>
                <p>Название: {element.name}</p>
                <p>Стоимость: {element.cost}</p>
                <p>Количество: {count}</p>
                 <p>Общая стоимость: {element.count*element.cost}</p>
                 <div className="box-btn">
                     <MyButton onClick={onIncrement}>+</MyButton>
                     <MyButton onClick= {onDecrement}>-</MyButton>
                     <MyButton onClick={handleClick}>Удалить</MyButton>
                 </div>
                <p>{element.inCart && <Mark/>}</p>
             </li>
    );
}

export default Purchases;













// const purchases =[
//     {name:'апельсинка', count:2, cost: 15, inCart: false, id:1},
//     {name:'мандаринка', count:4, cost: 10,inCart: true,id:2},
//     {name:'огурчик', count:1, cost: 20,inCart: false,id:3},
//     {name:'поминдорка', count:1, cost: 20,inCart: true,id:4},
// ];

// export default function Purchases(props){
//     const listPurchases = props.map(element =>
//         <li key={element.id}>
//             <p>Название: {element.name}</p>
//             <p>Стоимость: {element.cost}</p>
//             <p>Количество: {element.count}</p>
//             <p> {element.inCart && <Mark/>}</p>
//         </li>
//     );
//     const costAll = props.reduce((sum, el) => el.inCart ? sum+=el.cost*el.count : sum,0);
//     return(
//         <div>
//             <ul className="list">
//                 {listPurchases}
//             </ul>
//         <p>Общая стоимость {costAll}</p>
//         </div>
//     );
// }
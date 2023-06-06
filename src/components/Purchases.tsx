import React from 'react';
import '../Purchases.css'
import Mark from "./Mark";
import MyButton from "./MyButton";
import {IPurchases} from "../types/purchases";


interface purchasesProps{
    purchase:IPurchases;
    updateElement: (product: IPurchases) => void;
    deleteElement: (product: IPurchases) => void;
}

const Purchases = ({purchase, updateElement, deleteElement}: purchasesProps) =>{
    const handleDelete: React.MouseEventHandler<HTMLButtonElement> = () =>{
      deleteElement(purchase);
    }
    const handleIncrement:  React.MouseEventHandler<HTMLButtonElement> = () => {

      updateElement({
        ...purchase,
        count: purchase.count + 1
      })
    }
    const handleDecrement:  React.MouseEventHandler<HTMLButtonElement> = () => {
      // TODO::Добавить проверки, или условия чтобы удалялось если меньше 1.
      updateElement({
        ...purchase,
        count: purchase.count - 1
      })
    }
    return(
             <li>
                <p>Название: {purchase.name}</p>
                <p>Стоимость: {purchase.cost}</p>
                <p>Количество: {purchase.count}</p>
                 <p>Общая стоимость: {purchase.count * purchase.cost}</p>
                 <div className="box-btn">
                     <MyButton onClick={handleIncrement}>+</MyButton>
                     <MyButton onClick= {handleDecrement}>-</MyButton>
                     <MyButton onClick={handleDelete}>Удалить</MyButton>
                 </div>
                <p>{purchase.inCart && <Mark/>}</p>
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
import React from 'react';
import '../Purchases.css'
import Purchases from "./Purchases";
import {useState} from "react";
import {IPurchases} from "../types/purchases";


interface listProps{
    mas: IPurchases[];
    onDecrement:React.MouseEventHandler<HTMLButtonElement> | undefined;
    onIncrement:React.MouseEventHandler<HTMLButtonElement> | undefined;
    count:number;
    // removeProduct:(product:IPurchases) => void
}

export default function PurchasesList({mas,onDecrement, onIncrement,count}: listProps){
    const listPurchases = mas.map(element =>
        <Purchases element={element}  onIncrement={ onIncrement} onDecrement={onDecrement} count={count} />
    );
    const costAll = mas.reduce((sum, el) => el.inCart ? sum+=el.cost*el.count : sum,0);
    return(
        <div>
            <ul className="list">
                {listPurchases}
            </ul>
            <p>Общая стоимость: { costAll} рубликов</p>
        </div>
    );
}
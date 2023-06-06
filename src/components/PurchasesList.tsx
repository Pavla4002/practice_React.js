import React from 'react';
import '../Purchases.css'
import Purchases from "./Purchases";
import { IPurchases } from "../types/purchases";


interface listProps {
  mas: IPurchases[];
  updateElement: (product: IPurchases) => void;
  deleteElement: (product: IPurchases) => void;
}

export default function PurchasesList({ mas, updateElement, deleteElement }: listProps) {
  const listPurchases = mas.map(p =>
    <Purchases updateElement={updateElement} deleteElement={deleteElement} purchase={p} key={p.id}/>
  );
  const costAll = mas.reduce((sum, el) => el.inCart ? sum + el.cost * el.count : sum, 0);
  return (
    <div>
      <ul className="list">
        {listPurchases}
      </ul>
      <p>Общая стоимость: {costAll} рубликов</p>
    </div>
  );
}
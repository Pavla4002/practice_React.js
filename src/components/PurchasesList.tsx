import React from 'react';
import '../styles/Purchases.css'
import Purchases from "./Purchases";
import {useProducts} from "../hooks/useProducts";


export default function PurchasesList(){
    const products = useProducts()
    const listPurchases = products.map(element =>
        <Purchases element={element}/>
    );
    const costAll = products.reduce((sum, el) => el.inCart ? sum+=el.cost*el.count : sum,0);
    return(
        <div>
            {products.length>0 ?
                <div>
                    <ul className="list">
                        {listPurchases}
                    </ul>
                    <p>Общая стоимость: { costAll} рубликов</p>
                </div>

                : <h2>Добавьте товары</h2>
            }

        </div>
    );
}
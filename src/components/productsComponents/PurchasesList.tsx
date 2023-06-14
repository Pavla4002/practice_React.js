import React from 'react';
import '../../styles/Purchases.css'
import Purchases from "./Purchases";
import {useProducts} from "../../hooks/useProducts";
import {UseListProduct} from "../../hooks/useListProduct";


export default function PurchasesList(){
    const products = useProducts();
    const listRef = UseListProduct();
    const listPurchases = products.map(element =>
        <Purchases element={element} key={element.id}/>
    );
    const costAll = products.reduce((sum, el) => el.inCart ? sum+=el.cost*el.count : sum,0);
    return(
        <div>
            {products.length>0 ?
                <div>
                    <ul className="list" ref={listRef}>
                        {listPurchases}
                    </ul>
                    <p>Общая стоимость: { costAll} рубликов</p>
                </div>

                : <h2>Добавьте товары</h2>
            }
        </div>
    );
}
import React from 'react';
// import '../../styles/Purchases.css'
import styles from './index.module.css'
import Purchases from "../Purchases/Purchases";
import {useProducts} from "../../../hooks/useProducts";
import {UseListProduct} from "../../../hooks/useListProduct";


export default function PurchasesList(){
    const products = useProducts();
    const listRef = UseListProduct();
    const listPurchases = products.map(element =>
        <Purchases element={element} key={element.id}/>
    );
    const costAll = products.reduce((sum, el) => el.inCart ? sum+=el.cost*el.count : sum,0);
    return(
        <div className={styles.listArea}>
            <h2>Список покупок</h2>
            {products.length>0 ?
                <div className={styles.listArea}>
                    <p>Общая стоимость: { costAll} рубликов</p>
                    <ul ref={listRef} className={styles.list}>
                        {listPurchases}
                    </ul>
                </div>

                : <h2>Добавьте товары</h2>
            }
        </div>
    );
}
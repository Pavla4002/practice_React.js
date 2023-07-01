import React from 'react';
import {Link, Outlet} from "react-router-dom";
import styles from './index.module.css'

import PurchaseList from "../PurchaseList/PurchaseList";
import SearchPurchase from "../FiltersPurchase/SearchPurchase/SearchPurchase";



const PurchasePage = () => {
    new FormData();
    return (
        <div className={styles.purchasePage}>
            <div className={styles.part1}>
                <div>
                    <SearchPurchase/>
                </div>
                <div className={styles.linkAdd}>
                    <Link to="/purchases/create" className={styles.btnAdd}>Добавить</Link>
                </div>
            </div>
                <div className={styles.part2}>
                    <PurchaseList/>
                </div>
                <div className={styles.part3}>
                    <Outlet/>
                </div>
        </div>
    );
};

export default PurchasePage;


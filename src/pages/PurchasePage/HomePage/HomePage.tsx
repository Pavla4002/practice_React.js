import React from 'react';
import FormProduct from "../../../components/productsComponents/FormPurchase/FormProduct";
import PurchasesList from "../../../components/productsComponents/PurchasesList/PurchasesList";
import ThemesChanger from "../../../components/productsComponents/ThemesChanger";
import ProductProvider from "../../../context/Products/ProductProvider";
import styles from './index.module.css';

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <div className={styles.boxThemes}>
                <div className={styles.themes}>
                    <ThemesChanger/>
                </div>
            </div>
            <ProductProvider>
                <div className={styles.formListPurchases}>
                    <div className={styles.boxForm}>
                        <div className={styles.formFixed}>
                            <FormProduct/>
                        </div>
                    </div>
                    <div className={styles.boxList}>
                        <PurchasesList/>
                    </div>
                </div>
            </ProductProvider>
        </div>
    );
};

export default HomePage;
import React from 'react';
import FormProduct from "../components/productsComponents/FormProduct";
import PurchasesList from "../components/productsComponents/PurchasesList";
import ThemesChanger from "../components/productsComponents/ThemesChanger";
import ProductProvider from "../context/Products/ProductProvider";

const HomePage = () => {

    return (
        <>
            <div>
                <ThemesChanger/>
            </div>
            <ProductProvider>
                <div>
                    <FormProduct/>
                </div>
                <div>
                    <PurchasesList/>
                </div>
            </ProductProvider>

        </>

    );
};

export default HomePage;
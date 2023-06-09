import React from 'react';
import FormProduct from "../components/FormProduct";
import PurchasesList from "../components/PurchasesList";
import ThemesChanger from "../components/ThemesChanger";
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
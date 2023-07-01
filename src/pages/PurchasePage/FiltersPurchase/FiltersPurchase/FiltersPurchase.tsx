import React, {useRef} from 'react';
import {Form, useNavigation} from "react-router-dom";
import styles from "../SearchPurchase/index.module.css";
import FilterPurchase from "../FilterPurchase/FilterPurchase";
import SearchPurchase from "../SearchPurchase/SearchPurchase";

const FiltersPurchase = () => {
    const refForm = useRef(null);
    const navigation = useNavigation();
    return (
        <div>
            {/*<Form className={styles.searchStyleForm} ref={refForm}>*/}
                <SearchPurchase/>
                <FilterPurchase/>
                {
                    navigation.state==='loading' && <span className={styles.spinner}> Loading...</span>
                }
            {/*</Form>*/}
        </div>
    );
};

export default FiltersPurchase;
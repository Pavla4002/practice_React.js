import React, {useRef} from 'react';
import {Form, useNavigation} from "react-router-dom";
import styles from "../SearchPurchase/index.module.css";
import FilterPurchase from "../FilterPurchase/FilterPurchase";

const FiltersPurchase = () => {
    const refForm = useRef(null);
    const navigation = useNavigation();
    return (
        <div>
            <Form className={styles.searchStyleForm} ref={refForm}>
                {/*<SearchPurchase refForm={refForm}/>*/}
                <FilterPurchase/>
                {
                    navigation.state==='loading' && <span className={styles.spinner}> Loading...</span>
                }
            </Form>
        </div>
    );
};

export default FiltersPurchase;
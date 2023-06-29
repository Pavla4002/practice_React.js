import React from 'react';
import PurchaseListItem from "./PurchaseListitem/PurchaseListItem";
import {useLoaderData} from "react-router-dom";
import {IPurchases} from "../../../types";
import '../../../styles/newStyle.css';

const PurchaseList = () => {
    const {data} = useLoaderData() as {data:IPurchases[]};
    return (
        <div className="width-100 center">
            <h1>Список продуктов:</h1>
            <ul className="list-purchases">
                {
                    data.length>0 ?
                    data.map(p => (
                    <PurchaseListItem product={p} key={p.id}/>
                    )) : <h3>Добавьте продукты</h3>

                }

            </ul>
        </div>
    );
};

export default PurchaseList;
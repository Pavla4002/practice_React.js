import React, {useState} from 'react';
import {Form, NavLink, useLocation, useResolvedPath} from "react-router-dom";
import MyButton from "components/Button/MyButton";
import {IPurchases} from "types";
import 'styles/myPurchase.css';
import classNames from "classnames";
import Spinner from "../../../../components/Spinner/Spinner";
import MarkPurchase from "../Mark/MarkPurchase";

interface propsProduct{
    product:IPurchases,
}

const PurchaseListItem = ({product}:propsProduct) => {
    const [isActive,setIsActive]= useState(false);
    const nado = useResolvedPath(product.id.toString());
    const nado1 = useLocation();
    return (
            <li key={product.id} className={classNames("purchase-card-li",{ "active-li":nado.pathname===nado1.pathname})}>
                {product.inCart && <MarkPurchase/>}
                <NavLink to={product.id.toString()}  className={({isActive}) =>{
                    return "cover-place"
                }}>
                    {/*{({isPending})=>{*/}
                    {/*return isPending ?  <Spinner/>: */}
                    {product.name}
                    {/*}}*/}
                </NavLink>
                <Form  method="delete" action={`/purchases/${product.id}/delete`}>
                    <MyButton type="submit">Удалить</MyButton>
                </Form>
            </li>
    );
};

export default PurchaseListItem;
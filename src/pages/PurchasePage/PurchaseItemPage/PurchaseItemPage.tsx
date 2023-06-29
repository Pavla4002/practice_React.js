import React from 'react';
import {Form, useFetcher, useLoaderData, useNavigate} from "react-router-dom";
import {IPurchases} from "../../../types";
import MyButton from "../../../components/Button/MyButton";
import styles from './index.module.css';
import {Icons} from "../../../components";

const PurchaseItemPage = () => {
    const purchase = useLoaderData() as IPurchases;
    const navigate = useNavigate();
    const fetcher = useFetcher()
    return (
        <div className={styles.purchaseArea}>
            <div className={styles.purchaseItem}>
                <div className={styles.card}>
                    <fetcher.Form action="edit" method="put" className={styles.btnAddDelete}>
                        <MyButton type="submit" disabled={fetcher.state === "submitting"}>{purchase.inCart ? "В корзине" :" Добавить в корзину"}</MyButton>
                        <input type="hidden" value={purchase.name} name="name"/>
                        <input type="hidden" value={purchase.count} name="count"/>
                        <input type="hidden" value={purchase.cost} name="cost"/>
                        <input type="hidden" name="inCart" value={(!purchase.inCart).toString()} />
                        {/*{fetcher.state}*/}
                    </fetcher.Form>
                    <h2>{purchase.name}</h2>
                    <p> Количество: {purchase.count}</p>
                    <p>Цена: {purchase.cost}</p>
                </div>
                <div className={styles.deleteEditBtn}>
                    <div className={styles.btn}>
                        <MyButton type="submit" onClick={()=>{
                            navigate("edit");
                        }}><Icons.PencilIcon/></MyButton>
                    </div>
                    <div>
                        <Form  method="delete" action="delete">
                            <MyButton type="submit"><Icons.TrashIcon/></MyButton>
                        </Form>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default PurchaseItemPage;
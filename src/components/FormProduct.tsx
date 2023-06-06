import MyInput from "./MyInput";
import MyButton from "./MyButton";
import '../Purchases.css';
import React, {useState} from "react";
import {IPurchases} from "../types/purchases";

const initValue: IPurchases = {
    id:0,
    name:'',
    count:0,
    cost:0,
    inCart:false
}
interface formProps{
    addProduct:(product:IPurchases) => void
}

export default function FormProduct({addProduct}:formProps){
    const [product,setProduct] = useState<IPurchases>(initValue)
   const handleChange : React.ChangeEventHandler<HTMLInputElement> =(e) =>{
       setProduct({
           ...product,
           [e.target.name]:e.target.value
       });
   }
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) =>{
        e.preventDefault()
        addProduct(product)
        setProduct(initValue)
    }
    return(
        <div className="form-product">
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <span>Имя:</span>
                    <MyInput type="text" handleChange={handleChange} value={product.name} name="name"/>
                </div>
                <div>
                    <span>Количество:</span>
                    <MyInput type="number" handleChange={handleChange} value={product.count} name="count"/>
                </div>
                <div>
                    <span>Стоимость:</span>
                    <MyInput  type="number" handleChange={handleChange} value={product.cost} name="cost"/>
                </div>


                <MyButton type="submit" >Добавить</MyButton>
            </form>
        </div>
    );
}
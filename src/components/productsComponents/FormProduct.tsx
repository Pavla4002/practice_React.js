import MyInput from "../MyInput";
import MyButton from "../MyButton";
import '../../styles/Purchases.css';
import React, {useState} from "react";
import {IPurchases} from "../../types";
import {useProductDispatch} from "../../hooks/useProductDispatch";
import {ListProductContext} from "../../context/Products/productsContext";
import {UseListProduct} from "../../hooks/useListProduct";
import {flushSync} from "react-dom";

const initValue: IPurchases = {
    id:0,
    name:'',
    count:0,
    cost:0,
    inCart:false
}

type TStatusForm = "empty" | "typing" | "error" | "submitting" | "success"
export default function FormProduct(){
    const dispatch = useProductDispatch()
    const listRef = UseListProduct()
    const [status, setStatus] = useState<TStatusForm>("empty");
    const [product,setProduct] = useState<IPurchases>(initValue)
    const handleChange : React.ChangeEventHandler<HTMLInputElement> =(e) =>{
        if(e.target.value.length!== 0){
            setStatus("typing")
        }
       setProduct({
           ...product,
           [e.target.name]:e.target.value
       });
    }
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) =>{
        e.preventDefault()
        flushSync(()=>{
            dispatch({
                type: "add",
                payload: product
            })
            setProduct(initValue)
        })

        listRef.current?.scrollIntoView({
            behavior:"smooth",
            block:"end",
        })
    }

    return(
        <div className="form">
            <h2>Добавление товаров</h2>
          <form className="form-product" onSubmit={handleSubmit}>
                <div className='input-box'>
                    <span>Имя:</span>
                    <MyInput  handleChange={handleChange} value={product.name} name="name"/>
                </div>
                <div className='input-box'>
                    <span>Количество:</span>
                    <MyInput type="number" handleChange={handleChange} value={product.count} name="count"/>
                </div>
                <div className='input-box'>
                    <span>Стоимость:</span>
                    <MyInput  type="number" handleChange={handleChange} value={product.cost} name="cost"/>
                </div>
                <MyButton disabled={status!=="typing"} type="submit" >Добавить</MyButton>
            </form>

        </div>
    );
}
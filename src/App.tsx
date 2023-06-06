import React, {useState} from 'react';
import './App.css';
// import Profile from './components/Profile';
// import Product from "./components/Product";
import PurchasesList from "./components/PurchasesList";
import FormProduct from "./components/FormProduct";
import {IPurchases} from './types/purchases';
import Counter from "./components/Counter";


const purchases =[
    {name:'апельсинка', count:2, cost: 15, inCart: false, id:1},
    {name:'мандаринка', count:4, cost: 10,inCart: true,id:2},
    {name:'огурчик', count:1, cost: 20,inCart: true,id:3},
    {name:'поминдорка', count:1, cost: 30,inCart: true,id:4},
];

function App() {
    const [count,setCount] =useState<number>(0);
    const onIncrement:React.MouseEventHandler<HTMLButtonElement> = (e) =>{
        console.log(e.target)
        setCount(count+1);
    }
    const onDecrement=() =>{
        setCount(count-1);
    }
    const [productList,setProduct] =useState<IPurchases[]>(purchases);
    const addProduct= (product:IPurchases)=>{
        product.id = Math.max(...productList.map(el => el.id),0)+1;
            setProduct([
                ...productList,product
            ])
        console.log(purchases);
    }

  return (
    <div className="App">
        <FormProduct addProduct={addProduct} />
        <PurchasesList mas={productList} onIncrement={onIncrement} onDecrement={onDecrement} count={count}/>

        {/*<Counter count={count} onClick={onIncrement}></Counter>*/}
        {/*<Counter count={count} onClick={onDecrement}></Counter>*/}

        {/*<Profile />*/}
        {/*<Product />*/}
    </div>
  );
}

export default App;

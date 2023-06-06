import React, { useState } from 'react';
import './App.css';
import PurchasesList from "./components/PurchasesList";
import FormProduct from "./components/FormProduct";
import { IPurchases } from './types/purchases';


const purchases = [
  { name: 'апельсинка', count: 2, cost: 15, inCart: false, id: 1 },
  { name: 'мандаринка', count: 4, cost: 10, inCart: true, id: 2 },
  { name: 'огурчик', count: 1, cost: 20, inCart: true, id: 3 },
  { name: 'поминдорка', count: 1, cost: 30, inCart: true, id: 4 },
];

function App() {
  const [productList, setProduct] = useState<IPurchases[]>(purchases);
  const addProduct = (product: IPurchases) => {
    product.id = Math.max(...productList.map(el => el.id), 0) + 1;
    setProduct([
      ...productList, product
    ])
    console.log(purchases);
  }

  const updateElement = (product: IPurchases) => {
    setProduct(productList.map(p => p.id === product.id ? product : p ))
  }
  const deleteElement = (product: IPurchases) => {
    setProduct(productList.filter(p => p.id !== product.id ))
  }

  return (
    <div className="App">
      <FormProduct addProduct={addProduct}/>
      <PurchasesList mas={productList} updateElement={updateElement} deleteElement={deleteElement}/>

      {/*<Counter count={count} onClick={onIncrement}></Counter>*/}
      {/*<Counter count={count} onClick={onDecrement}></Counter>*/}

      {/*<Profile />*/}
      {/*<Product />*/}
    </div>
  );
}

export default App;

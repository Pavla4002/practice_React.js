import React, {ReactElement, useReducer} from "react";
import {ProductsContext, ProductsDispatchContext} from "./productsContext";
import {productReducer} from "../../store/productReducer";

interface ProductProviderProps{
    children:ReactElement[]
}
const purchases =[
    {name:'апельсинка', count:2, cost: 15, inCart: false, id:1},
    {name:'мандаринка', count:4, cost: 10,inCart: true,id:2},
    {name:'огурчик', count:1, cost: 20,inCart: true,id:3},
    {name:'поминдорка', count:1, cost: 30,inCart: true,id:4},
];


const ProductProvider = ({children}:ProductProviderProps)=>{
    const [productList, dispatch] = useReducer(productReducer, purchases);

    return(
       <ProductsContext.Provider value={productList}>
           <ProductsDispatchContext.Provider value={dispatch}>
               {children}
           </ProductsDispatchContext.Provider>
       </ProductsContext.Provider>
    );
};

export default ProductProvider;
import React, {ReactElement, useReducer, useRef} from "react";
import {ListProductContext, ProductsContext, ProductsDispatchContext} from "./productsContext";
import {productReducer} from "../../store/productReducer";

interface ProductProviderProps{
    children:ReactElement[];
}
const purchases =[
    {name:'апельсинка', count:2, cost: 15, inCart: false, id:1},
    {name:'мандаринка', count:4, cost: 10,inCart: true,id:2},
    {name:'огурчик', count:1, cost: 20,inCart: true,id:3},
    {name:'поминдорка', count:1, cost: 30,inCart: true,id:4},
    {name:'персик', count:2, cost: 15, inCart: false, id:5},
    {name:'груша', count:4, cost: 10,inCart: true,id:6},
    {name:'лимон', count:1, cost: 20,inCart: true,id:7},
    {name:'лайм', count:1, cost: 30,inCart: true,id:8},
    {name:'ананас', count:2, cost: 15, inCart: false, id:9},
    {name:'личи', count:4, cost: 10,inCart: true,id:10},
    {name:'огурчик', count:1, cost: 20,inCart: true,id:11},
    {name:'яблоки', count:1, cost: 30,inCart: true,id:12},
    {name:'апельсинка', count:2, cost: 50, inCart: false, id:13},
    {name:'киви', count:4, cost: 10,inCart: true,id:14},
    {name:'земляника', count:1, cost: 20,inCart: true,id:15},
    {name:'черника', count:1, cost: 30,inCart: true,id:16},
    {name:'малина', count:2, cost: 15, inCart: false, id:17},
    {name:'вишни', count:4, cost: 10,inCart: true,id:18},
    {name:'огурчик', count:1, cost: 20,inCart: true,id:19},
    {name:'гриб', count:1, cost: 30,inCart: true,id:20},
];


const ProductProvider = ({children}:ProductProviderProps)=>{
    const listRef = useRef(null)
    const [productList, dispatch] = useReducer(productReducer, purchases);

    return(
       <ProductsContext.Provider value={productList}>
           <ProductsDispatchContext.Provider value={dispatch}>
               <ListProductContext.Provider value={listRef}>
                   {children}
               </ListProductContext.Provider>

           </ProductsDispatchContext.Provider>
       </ProductsContext.Provider>
    );
};

export default ProductProvider;
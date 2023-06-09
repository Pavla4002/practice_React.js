import {useContext} from "react";
import {ProductsDispatchContext} from "../context/Products/productsContext";

export const useProductDispatch = () =>{
    return useContext(ProductsDispatchContext)
}
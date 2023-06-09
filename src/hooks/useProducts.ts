import {useContext} from "react";
import {ProductsContext} from "../context/Products/productsContext";

export const useProducts = () =>{
    return useContext(ProductsContext)
}
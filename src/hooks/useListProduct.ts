import {useContext} from "react";
import {ListProductContext} from "../context/Products/productsContext";

export const UseListProduct = () =>{
    return useContext(ListProductContext)
}
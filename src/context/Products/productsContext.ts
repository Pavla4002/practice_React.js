import {createContext} from 'react';
import {IActionProduct, IPurchases} from "../../types";

export const ProductsContext = createContext<IPurchases[]>([]);
export const ProductsDispatchContext = createContext< React.Dispatch<IActionProduct>>(() =>{});
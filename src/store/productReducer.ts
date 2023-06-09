import {IActionProduct, IPurchases} from "../types";

 export const productReducer = (products:IPurchases[], {type,payload:product}:IActionProduct)=>{
        switch (type){
            case "add":{
            return[...products,product];
            }
            case "update":{
            return products.map(p => p.id ===product.id ? product : p);
            }
            case "delete":{
                return products.filter(p => p.id !== product.id);
            }
            default: {
                return products;
            }
        }
}

import {IProfile, IActionProfile} from '../types'

export const profileReducer = (products:IProfile[], {type,payload:profile}:IActionProfile)=>{
    switch (type){
        case "add":{
            return[...products,{...profile,id:Date.now()}];
        }
        case "update":{
            return products.map(p => p.id ===profile.id ? profile : p);
        }
        case "delete":{
            return products.filter(p => p.id !== profile.id);
        }
        default: {
            return products;
        }
    }
}

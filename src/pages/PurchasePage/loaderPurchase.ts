import {LoaderFunction} from "react-router-dom";

export const getPurchases: LoaderFunction = async ({request})=>{
    const url = new URL(request.url);
    let q = url.searchParams.get("q") || "";
    let add = url.searchParams.get("add") || "idle";
    let path = `http://localhost:3001/purchases`;
    const queryString = new URLSearchParams();
    if(q){
        queryString.append("name_like",q);
    }
    if(add !== "idle"){
        queryString.append("inCart_like",(add === "inCartTrue").toString());
    }

    const response = await fetch(path + `?${queryString.toString()}`);
    const data = await response.json();
    return {data, q, add};
}

export const getPurchaseItem: LoaderFunction= async ({params})=>{
    const response = await fetch(`http://localhost:3001/purchases/${params.purchaseID}`);
    if(response.status===200){
        const data = await response.json();
        return data;
    }
    if(response.status === 404){
        throw response;
    }

}

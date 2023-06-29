import {ActionFunction, redirect} from "react-router-dom";


export const createPurchase: ActionFunction = async ({request})=>{
    const formData = await request.formData();
    const createdData = Object.fromEntries(formData)
    const response = await fetch("http://localhost:3001/purchases",{
        method:"post",
        body: JSON.stringify({
            ...createdData,
            count:+createdData.count,
            cost:+createdData.cost,
            inCart: false,
        }),
        headers:{
            "Content-type": "application/json"
        }
    })
    const data = await response.json();
    console.log(data)
    return redirect(`/purchases/${data.id}`);
}


export const deletePurchase: ActionFunction = async ({params})=>{
    try {
        const response = await fetch(`http://localhost:3001/purchases/${params.purchaseID}`,{
            method:"delete",
            headers:{
                "Content-type": "application/json"
            }
        })
        const data = await response.json()
        return redirect('/purchases')

    }catch (e){
        throw new Error('Произошла ошибка');
    }
}


export const updatePurchase: ActionFunction = async ({params,request})=>{
    const { purchaseID } = params;
    const formData = await request.formData();
    const updateData = Object.fromEntries(formData)
    const response = await fetch(`http://localhost:3001/purchases/${purchaseID}`,{
        method:"put",
        body: JSON.stringify({
            ...updateData,
            count:+updateData.count,
            cost:+updateData.cost,
            inCart: updateData.inCart === 'true',
        }),
        headers:{
            "Content-type": "application/json"
        }
    })
    const data = await response.json();
    return redirect(`/purchases/${data.id}`);
}

export const authorizationUser: ActionFunction = async ({request})=>{
    const formData = await request.formData();
    const createData = Object.fromEntries(formData)
    const response = await fetch(`http://localhost:3001/authorization`,{
        method:"post",
        body: JSON.stringify({
            ...createData
        }),
        headers:{
            "Content-type": "application/json"
        }
    })
    const data = await response.json();
    console.log(data)
    return data
}

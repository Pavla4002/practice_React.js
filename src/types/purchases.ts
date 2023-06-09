export interface IPurchases{
    id:number,
    cost: number,
    count:number,
    inCart:boolean,
    name:string,
}

export interface IActionProduct{
    type: "add" | "update" |"delete",
    payload:IPurchases
}

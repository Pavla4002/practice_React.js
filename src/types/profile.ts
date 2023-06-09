
export interface IProfile{
    id:number,
    firstNameUser:string,
    secondNameUser:string,
    ageUser:number,
    favoriteQuote:string,
    imageUser:string
}

export interface IActionProfile{
    type: "add" | "update" |"delete",
    payload:IProfile
}

import MyButton from "../MyButton";
import {useState} from "react";


interface Props{
    count:number,
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}
const Counter=({count,onClick}:Props)=>{
    // const [count,setCount] =useState<number>(0);
    // const onIncrement = () =>{
    //     setCount(count+1)
    // }
    return(
        <div>
            <strong>{count}</strong>
            <MyButton onClick={onClick}>+1</MyButton>
        </div>
    )
}

export default Counter
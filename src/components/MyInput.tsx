import React from 'react';
import '../styles/Purchases.css'

interface inputProps{
    handleChange:React.ChangeEventHandler<HTMLInputElement> | undefined;
    value:string|number;
    name:string;
    type?: "text" | "number";
}

const MyInput = ({value,handleChange,name,type="text"}:inputProps) => {
    return(
        <input onChange={handleChange} value={value} name={name} id="inputProduct" type={type} className='input'/>
    );
}

export default MyInput;
import React from 'react';
import '../Purchases.css'

interface inputProps{
    handleChange:React.ChangeEventHandler<HTMLInputElement> | undefined;
    value:string|number;
    name:string;
    type?: "text" | "number";
}

const MyInput = ({value,handleChange,name,type="text"}:inputProps) => {
    return(
        <div className='input'>
            <input onChange={handleChange} value={value} name={name} id="inputProduct"/>
        </div>
    );
}

export default MyInput;
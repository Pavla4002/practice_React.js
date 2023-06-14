import React, {forwardRef} from 'react';
import '../styles/Purchases.css'

interface inputProps{
    handleChange:React.ChangeEventHandler<HTMLInputElement> | undefined;
    value:string|number;
    name:string;
    type?: "text" | "number";
}

const MyInput = forwardRef<HTMLInputElement,inputProps>(({value,handleChange,name,type="text"},ref) => {
    return(
        <input onChange={handleChange} value={value} name={name} id="inputProduct" type={type} className='input' ref={ref}/>
    );
})

export default MyInput;
import React, {useRef, useState} from "react";
import Timer from "./Timer";
import MyInput from "../MyInput";
import MyButton from "../MyButton";


const InputFocus = () => {
    const [value,setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = () =>{
        inputRef.current?.focus();
    }
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        setValue(e.target.value);
    }
    return(
        <div>
            <div>
                <div className="width-input-block">
                    <MyInput type="text" name="test" value={value} ref={inputRef} handleChange={handleChange}/>
                </div>
                <MyButton  onClick={handleClick}>Focus</MyButton>
            </div>
            <Timer/>
        </div>
    )
}

export default InputFocus
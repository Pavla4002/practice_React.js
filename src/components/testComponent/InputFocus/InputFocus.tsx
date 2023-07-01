import React, {useRef, useState} from "react";
import MyInput from "../../MyInput";
import MyButton from "../../Button/MyButton";
import 'styles/testPage.css'
import styles from './index.module.css'


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
            <div className={styles.areaInput}>
                <div className={styles.input}>
                    <span>Нажми на кнопку Focus и в input появится курсор. Реализовано с помощью хука useRef</span>
                    <MyInput type="text" name="test" value={value} ref={inputRef} handleChange={handleChange}/>
                </div>
                <div className={styles.btnFocus}>
                    <MyButton  onClick={handleClick}>Focus</MyButton>
                </div>

            </div>
    )
}

export default InputFocus
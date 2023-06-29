import React, {useEffect, useRef, useState} from 'react';
import {Form, useLoaderData, useNavigation, useSubmit} from "react-router-dom";
import styles from './index.module.css';
import {useDebounce} from "../../../../hooks/useDebounce";

type inCartOptions = "idle" | "inCartTrue" | "inCartFalse";
// interface searchProps{
//     refForm:React.MutableRefObject<null>
// }

const SearchPurchase = () => {
    const {q,add} = useLoaderData() as {q:string,add:inCartOptions};
    const submit= useSubmit();
    const navigation = useNavigation();
    const refForm = useRef(null);
    const [value,setValue] = useState(q);
    const [filter,setFilter] = useState<inCartOptions>(add);
    const debounceValue= useDebounce<string>(value);
    const handleChangeSearch: React.ChangeEventHandler<HTMLInputElement>=(e)=>{
        setValue(e.target.value);
    }
    const handleChangeSelect: React.ChangeEventHandler<HTMLSelectElement> = (e)=>{
        setFilter(e.target.value as inCartOptions);
    }
    useEffect(()=>{
        setValue(q);
    },[q]);

    useEffect(()=>{
        const isFirstSearch = q === '';
        submit(refForm.current,{
            replace:!isFirstSearch
        })
    },[debounceValue,filter]);
    return (
        <div className={styles.bigBlockSearch}>
            <span>
                Найди продукт:
            </span>
            <Form className={styles.searchStyleForm} ref={refForm}>
                <input
                    type="search"
                    name="q"
                    value={value}
                    onChange={handleChangeSearch}
                    className={styles.searchStyle}
                />
                <select name="add" value={filter} onChange={handleChangeSelect}>
                    <option value="idle">Выберите фильтр</option>
                    <option value="inCartTrue">В корзине</option>
                    <option value="inCartFalse">Не в корзине</option>
                </select>
                {
                    navigation.state==='loading' && <span className={styles.spinner}> Loading...</span>
                }
            </Form>
        </div>
    );
};

export default SearchPurchase;
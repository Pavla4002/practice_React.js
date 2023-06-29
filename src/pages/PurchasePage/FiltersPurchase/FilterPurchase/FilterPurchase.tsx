import React from 'react';
import {Form} from "react-router-dom";

const FilterPurchase = () => {
    return (
        <div>
            <span>Фильтрация продуктов:</span>
            <Form>
                <select name="q">
                    <option disabled selected>Выберите фильтр</option>
                    <option value="В корзине">В корзине</option>
                    <option value="Не в корзине">Не в корзине</option>
                </select>
            </Form>
        </div>
    );
};

export default FilterPurchase;
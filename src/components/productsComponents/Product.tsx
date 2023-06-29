import React from 'react';
import Mark from './Marck/Mark'
import '../../styles/Product.css'

let product = {
    id: 1,
    name: 'Яблоки',
    count: 2,
    inCart: true,
}

export default function Product(){
    return (
        <div className="product-info">
            <div className="jcsb">
                <span>Товар:</span>
                {product.inCart && <Mark/>}
            </div>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>{product.count}</p>
        </div>
    );
}


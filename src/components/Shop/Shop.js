import React, { useState, useEffect } from 'react'
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);


    useEffect( () => { 
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])


    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product key={product.key} product={product} />)
                }
            </div>
            <div className="card-container">
                <h3>This is Card</h3>
            </div>
        </div>
    )
}

export default Shop

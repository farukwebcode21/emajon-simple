import React, { useState, useEffect } from 'react'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);


 
    useEffect( () => { 
        // console.log('Product api called')

        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            // console.log('Products received');
            setDisplayProducts(data);
        });

    },[]);


    useEffect(()=>{
        // console.log('Local Storage call ..')
        if(products.length){
            const saveCart =getStoredCart();
            const storeCart =[];
            for(const key in saveCart){
                // console.log(key);
                // console.log(products);
                // console.log(key, saveCart[key]); //See key 
                const  addedProduct = products.find(product =>product.key === key);
                // console.log(key, addedProduct);
                if(addedProduct){
                    const quantity = saveCart[key];
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct); //Checking quantity add or not
                    storeCart.push(addedProduct);
                }
            }
            setCart(storeCart);
        }

    },[products])


    const handleAddToCart = (product) =>{
        const newCart =[...cart, product];
        setCart(newCart);
        // save to local storage for now
        addToDb(product.key);
    }
    const handleSearch = event =>{
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
        console.log(matchedProducts.length);
    }
    


    return (
        <div>
            <div className="search-container">
                <input type="text" onChange={handleSearch} placeholder="search please"/>
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product 
                            key={product.key} 
                            product={product}
                            handleAddToCart={handleAddToCart}
                        />)
                    }
                </div>
                <div className="card-container">
                    <Cart cart ={cart}/>
                </div>
            </div>

        </div>
    )
}

export default Shop

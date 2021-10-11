import React from 'react'
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const {name, price, img, seller, stock } = props.product;
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
                <h3>{name}</h3>
                <p><small> by : {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button 
                onClick={()=> props.handleAddToCart(props.product)}
                 className="btn-regular"><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
        </div>
    )
}

export default Product

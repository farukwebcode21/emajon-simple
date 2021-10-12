import React from 'react'
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import ReactStars from 'react-rating-stars-component'

const Product = (props) => {
    console.log(props);
    const {name, price, img, seller, stock, star} = props.product;

    const firstExample = {
        size: 30,
        value: 2.5,
        edit: false,
        
      };

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
                <ReactStars {...firstExample}/>
                <button 
                onClick={()=> props.handleAddToCart(props.product)}
                 className="btn-regular"><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
        </div>
    )
}

export default Product

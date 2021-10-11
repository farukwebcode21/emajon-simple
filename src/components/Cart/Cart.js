import React from 'react'
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart);
    const {cart} = props;

    const total = cart.reduce((previous, current) =>previous + current.price, 0)
    // let total = 0;
    // for(const product of cart){
    //     total = total + product.price;
    // }
    return (
        <div>
            <h1>Items order:{props.cart.length}</h1>
            <br></br>
            <p>Total: {total}</p>
        </div>
    )
}

export default Cart

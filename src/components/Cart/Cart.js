import React from 'react'
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart);
    const {cart} = props;
    // console.log(cart);

    // const totalReducer =(previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);
    
    let totalQuantity = 0;
    let total = 0;
    for(const product of cart){ 
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15: 0;
    const totalBeT = total + shipping;
    
    const tax = (total + shipping)*0.10;

    const grandTotal = total + shipping + tax;
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>Items ordered:{totalQuantity}</p>
            <table>
                <tbody>
                    <tr>
                        <td>Items:</td>
                        <td>${total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling:</td>
                        <td>${shipping}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td>${totalBeT.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>${tax.toFixed(2)}</td>
                    </tr>
                    <tr className="row">
                        <td>Order Total:</td>
                        <td>${grandTotal.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Cart

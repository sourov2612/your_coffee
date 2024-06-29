import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {carts} = props 

    let total = 0; 
    let shipping = 0; 
    let quantity = 0;
    for(const product of carts){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    let tax = parseFloat((total * 10/100).toFixed(2)); 
    let grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Your cart</h3>
            <p>Selected item : ${quantity}</p>
            <p>Total price : ${total}</p>
            <p>Total shipping : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h4>Grand total : ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;
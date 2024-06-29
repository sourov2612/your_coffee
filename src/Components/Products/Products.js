import React from 'react';
import './Products.css'

const Products = (props) => {
    const {name, price, img, seller, ratings} = props.product
    const {handleAddToCart} = props
    return (
        <div className='productCart'>
                    <div>
                        <img src={img} alt="" />
                        <div className='cartDetails'>
                            <h4>Name : {name}</h4>
                            <h5>Price : {price}</h5>
                            <p>Seller : {seller}</p>
                            <p><small>Ratings : {ratings} stars</small></p>
                            
                        </div>
                        
                    </div>
                    <button onClick={() =>handleAddToCart(props.product)} 
                    className='btnAddToCart'
                    >Add to cart</button>
        </div>
    );
};

export default Products;
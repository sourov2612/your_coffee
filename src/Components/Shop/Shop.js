import React, { useEffect, useState } from 'react';
import Products from '../Products/Products'; 
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../Utilitis/Localdb';

const Shop = () => {
    const [products, setProducts] = useState([]) 
    const [carts, setCarts] = useState([])

    useEffect( () => {
        fetch('coffees.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }, []) 

    useEffect( () => {
        const starCard = getShoppingCart();
        const savedCart = [];
        for(const id in starCard){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = starCard[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCarts(savedCart);
    }, [products])

    const handleAddToCart = (selectedProduct) =>{
        let newCart = []; 

        const exists = carts.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1; 
            newCart = [...carts, selectedProduct]
        }else{
            const rest = carts.filter(product => product.id !== selectedProduct.id) 
            exists.quantity = exists.quantity + 1; 
            newCart = [...rest, exists]
        }
        setCarts(newCart)
        addToDb(selectedProduct.id)
    }

    return (
        <div className='shopContainer'>
            <div className='productContainer'>
                {
                    products.map(product => <Products 
                    key = {product.id} 
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Products> )
                }
            </div>
            <div className='cartContainer'>
                <Cart carts={carts}></Cart>
            </div>
        </div>
    );
};

export default Shop;
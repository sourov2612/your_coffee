const addToDb = id => {
    let shoppingCart = getShoppingCart();

    const quantity = shoppingCart[id]
    if(!quantity){
        shoppingCart[id] = 1;
    }else{
        const newQuantity = quantity + 1; 
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {} 

    const stroedCart = localStorage.getItem('shopping-cart') 
    if(stroedCart){
        shoppingCart = JSON.parse(stroedCart)
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
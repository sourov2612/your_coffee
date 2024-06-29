import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header_container'>
            <h2 className='headerlogo'>Your coffee</h2>
            <div className='headerOption'>
                <a href="#">About</a>
                <a href="#">Your order</a>
                <a href="#">Cart</a>
                <a href="#">Items</a>
            </div>
        </div>
    );
};

export default Header;
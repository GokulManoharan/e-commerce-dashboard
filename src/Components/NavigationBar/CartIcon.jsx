import React, { useState, useContext, useEffect } from 'react';
import { Icon } from "@iconify/react";
import shoppingCartIcon from '@iconify-icons/feather/shopping-cart';

import CartModal from '../CartModal/CartModal';
import ItemsContext from '../../Contexts/itemsContext';
import shoppingCartItems from '../../Data/cartItems.json'

import './NavigationBar.css';

const CartIcon = () => {
    const [cartModalShow, setCartModalShow] = useState(false);

    const items = useContext(ItemsContext);

    useEffect(() => {
        const fakeGetCall = Promise.resolve(shoppingCartItems)
        fakeGetCall.then(res => {
            items.setCartItems(res.shopping_cart_items);
        })
    }, [])

    const handleCartIconClick = _ => {
        setCartModalShow(!cartModalShow);
    }

    return (
        <div className="cart-icon-count-wrapper">
            <Icon icon={shoppingCartIcon} className="nav-icons nav-icon"  onClick={handleCartIconClick} />
            <CartModal show={cartModalShow} setShow={handleCartIconClick} />
            <span className="cart-icon-count"> {items.cartItems.length} </span>
        </div>
    )
}

export default CartIcon
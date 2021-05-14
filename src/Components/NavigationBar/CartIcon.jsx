import React, { useState, useContext, useEffect, useRef } from 'react';
import { Icon } from "@iconify/react";
import shoppingCartIcon from '@iconify-icons/feather/shopping-cart';
import { Overlay, Popover, Modal } from 'react-bootstrap';

import CartContent from '../Cart/CartContent';
import ItemsContext from '../../Contexts/itemsContext';
import shoppingCartItems from '../../Data/cartItems.json'

import './NavigationBar.css';

const CartIcon = () => {
    const [cartModalShow, setCartModalShow] = useState(false);
    const [target, setTarget] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    const ref = useRef(null);
    const items = useContext(ItemsContext);

    useEffect(() => {
        const fakeGetCall = Promise.resolve(shoppingCartItems);
        fakeGetCall.then(res => {
            items.setCartItems(res.shopping_cart_items);
        }).catch(err => {
            throw new Error('Something went wrong!')
        })
    }, [])

    const handleCartIconClick = e => {
        setCartModalShow(!cartModalShow);
        setTarget(e.target);
    }

    const handleCheckout = () => {
        setCartModalShow(!cartModalShow);
        items.setCartItems([]);
        setShowAlert(true);
    }

    return (
        <div className="cart-icon-count-wrapper" ref={ref}>
            <div className="cart-icon-div" onClick={e => handleCartIconClick(e)}>
                <Icon icon={shoppingCartIcon} className="nav-icons nav-icon" />
                {
                    items.cartItems.length > 0 &&
                    <span className="cart-icon-count"> {items.cartItems.length} </span>
                }
            </div>
            {
                cartModalShow &&
                <div className="popover-backdrop">
                </div>
            }
            <Overlay
                show={cartModalShow}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={20}
                rootClose
                onHide={() => setCartModalShow(false)}
            >
                <Popover data-trigger="focus" show={cartModalShow}>
                    <CartContent handleCheckout={handleCheckout} />
                </Popover>
            </Overlay>
            <Modal
                size="sm"
                show={showAlert}
                onHide={() => setShowAlert(false)}
            >
                <Modal.Header>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Transaction successful
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thanks for purchasing!
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CartIcon
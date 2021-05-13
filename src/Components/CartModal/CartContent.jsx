import React, { useState, useEffect, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Icon } from "@iconify/react";
import plusIcon from '@iconify-icons/feather/plus';
import minusIcon from '@iconify-icons/feather/minus';
import xIcon from '@iconify-icons/feather/x';
import ItemsContext from '../../Contexts/itemsContext';

import './CartModal.css';

const ProductRow = ({ item, index, handleChangeQuantity, handleDeleteItem }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Row
            className="cart-items-row"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Col md={5}>
                <span>{item.name}</span>
            </Col>
            <Col md={4} className="cart-quantity-change-col">
                <div>
                    <Icon icon={minusIcon} className="nav-icons nav-icon cart-icons" onClick={() => handleChangeQuantity(index, 'subtract')} />
                    <span>{item.count}</span>
                    <Icon icon={plusIcon} className="nav-icons nav-icon" onClick={() => handleChangeQuantity(index, 'add')} />
                </div>
            </Col>
            <Col md={3} className={isHovered ? "cart-price-col-hovered" : "cart-price-col"}>
                <span>
                    {
                        isHovered &&
                        <Icon icon={xIcon} className="nav-icons nav-icon" onClick={() => handleDeleteItem(index)} />
                    }
                </span>
                <span>${+(item.price * item.count).toFixed(2)}</span>
            </Col>
        </Row>
    )
}

const CartContent = ({ setTotalPrice }) => {
    const items = useContext(ItemsContext);
    const [cartItems, setCartItems] = useState(items.cartItems);

    useEffect(() => {
        const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.count), 0);
        setTotalPrice(totalPrice);
        items.setCartItems(cartItems);
    }, [cartItems]);

    const handleChangeQuantity = (index, action) => {
        const changedCartItems = [...cartItems].map((item, i) => {
            return {
                ...item,
                count: index === i ? action === 'add' ? item.count + 1 : (item.count !== 0 ? item.count - 1 : 0) : item.count
            }
        })
        setCartItems(changedCartItems);
    }

    const handleDeleteItem = index => {
        const changedCartItems = [...cartItems].filter((item, i) => i !== index);
        setCartItems(changedCartItems);
    }

    return (
        <div className="cart-items-wrapper">
            {
                cartItems.length === 0 && (
                    <Row >
                        <Col md={12} className="no-items">
                            <span>No items in the cart</span>
                        </Col>
                    </Row>
                )
            }
            {
                cartItems.length > 0 && cartItems.map((item, index) => {
                    return <ProductRow item={item}
                        index={index}
                        handleChangeQuantity={handleChangeQuantity}
                        handleDeleteItem={handleDeleteItem} />
                })
            }
        </div>
    )
}

export default CartContent
import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import './CartModal.css';

const CartFooter = ({ totalPrice, totalItems }) => {

    return (
        <>
            <Row className="cart-modal-footer-row">
                <Col md={6} sm={6} className="cart-modal-footer-row-first-col">
                    <span>Total:</span>
                </Col>
                <Col md={6} sm={6} className='cart-modal-footer-row-second-col'>
                    <span>${+totalPrice.toFixed(2)}</span>
                </Col>
            </Row>
            <Row className="cart-modal-footer-button-row">
                <Col md={12}>
                    <Button disabled={totalItems === 0 ? true : false} className="cart-modal-checkout-button">Checkout</Button>
                </Col>
            </Row>
        </>
    )
}

export default CartFooter
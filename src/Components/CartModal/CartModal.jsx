import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import ItemsContext from '../../Contexts/itemsContext';

import CartContent from "./CartContent";
import CartFooter from "./CartFooter";
import './CartModal.css';

const CartModal = ({ show, setShow }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const totalItems = useContext(ItemsContext).cartItems.length;
    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
            >
                <Modal.Header >
                    <Modal.Title id="example-custom-modal-styling-title">
                        <div className="cart-modal-title-wrapper">
                            <span>My Cart</span>
                            <span className="badge"> {totalItems} Items</span>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CartContent setTotalPrice={setTotalPrice} />
                </Modal.Body>
                <Modal.Footer>
                    <CartFooter totalPrice={totalPrice} totalItems={totalItems} />
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CartModal
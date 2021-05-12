import React from 'react';
import { Form } from 'react-bootstrap';
import { Icon } from "@iconify/react";
import homeIcon from '@iconify-icons/feather/home';
import mailIcon from '@iconify-icons/feather/mail';
import messageSquareIcon from '@iconify-icons/feather/message-square';
import checkSquareIcon from '@iconify-icons/feather/check-square';
import calendarIcon from '@iconify-icons/feather/calendar';
import shoppingCartIcon from '@iconify-icons/feather/shopping-cart';
import typeIcon from '@iconify-icons/feather/type';
import eyeIcon from '@iconify-icons/feather/eye';
import creditCardIcon from '@iconify-icons/feather/credit-card';

import './SideBar.css'

const SideBar = props => {

    return (
        <div className="side-bar visible-lg-block hidden-lg">
            <Icon icon={homeIcon} className="nav-icons nav-icon" />
            <Form.Control as="select" size="lg">
                <option>Large select</option>
            </Form.Control>
            <div className="category-1 category">
                <span className="category-title-span">CATEGORY 1</span>
                <ul>
                    <li><Icon icon={mailIcon} className="nav-icons nav-icon" /> <span>Email</span></li>
                    <li><Icon icon={messageSquareIcon} className="nav-icons nav-icon" /> <span>Chat</span></li>
                    <li><Icon icon={checkSquareIcon} className="nav-icons nav-icon" /> <span>Todo</span></li>
                    <li><Icon icon={calendarIcon} className="nav-icons nav-icon" /> <span>Calendar</span></li>
                    <li><Icon icon={shoppingCartIcon} className="nav-icons nav-icon" /> <span>eCommerce</span></li>
                </ul>
            </div>
            <div className="category category-2">
                <span className="category-title-span">CATEGORY 2</span>
                <ul>
                    <li><Icon icon={typeIcon} className="nav-icons nav-icon" /> <span>Typography</span></li>
                    <li><Icon icon={eyeIcon} className="nav-icons nav-icon" /> <span>Feather</span></li>
                    <li><Icon icon={creditCardIcon} className="nav-icons nav-icon" /> <span>Cards</span></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar

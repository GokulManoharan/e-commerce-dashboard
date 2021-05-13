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
            <div className="dash-select-menu-wrapper">
                <div className="dash-name-wrapper">
                    <Icon icon={homeIcon} className="nav-icons nav-icon" />
                    <span>Home</span>
                </div>
                <span className="badge dash-number">2</span>
            </div>
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
                    <li className="cards-span-li">
                        <Icon icon={creditCardIcon} className="nav-icons nav-icon" />
                        <div className="cards-span-wrapper">
                            <span>Cards</span>
                            <span className="badge">new</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar

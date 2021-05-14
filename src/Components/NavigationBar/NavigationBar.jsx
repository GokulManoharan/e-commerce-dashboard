import React from 'react';
import { Icon } from "@iconify/react";
import { Row } from 'react-bootstrap';
import calendarIcon from '@iconify-icons/feather/calendar';
import mailIcon from '@iconify-icons/feather/mail';
import messageSquareIcon from '@iconify-icons/feather/message-square';
import starIcon from '@iconify-icons/feather/star';
import checkSquareIcon from '@iconify-icons/feather/check-square';
import searchIcon from '@iconify-icons/feather/search';
import bellIcon from '@iconify-icons/feather/bell';
import menuIcon from '@iconify-icons/feather/menu';

import CartIcon from './CartIcon';

import './NavigationBar.css';

const NavigationBar = () => {

    return (
        <Row className="navigation-row">
            <div className="navigation-bar">
                <div className="app-navigation-bar">
                    <div className="app-navbar-left-icons d-none d-xl-flex">
                        <Icon icon={calendarIcon} className="nav-icons nav-icon" />
                        <Icon icon={messageSquareIcon} className="nav-icons nav-icon" />
                        <Icon icon={mailIcon} className="nav-icons nav-icon" />
                        <Icon icon={checkSquareIcon} className="nav-icons nav-icon" />
                        <Icon icon={starIcon} className="nav-star-icon nav-icon" />
                    </div>
                    <div className="app-navbar-left-icons d-xl-none d-block">
                        <Icon icon={menuIcon} className="nav-icons nav-icon" />
                    </div>
                    <div className="app-navbar-right-icons">
                        <Icon icon={searchIcon} className="nav-icons nav-icon" />
                        <CartIcon />
                        <Icon icon={bellIcon} className="nav-icons nav-icon" />
                        <div className="username-div d-none d-md-block">
                            <span className="username-label">Username</span>
                            <p className="user-role">admin</p>
                        </div>
                    </div>
                </div>
            </div>
        </Row>
    )
}

export default NavigationBar

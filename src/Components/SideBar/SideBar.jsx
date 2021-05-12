import React from 'react';
import { Navbar, Form, Nav, NavDropdown, Button, FormControl } from 'react-bootstrap';
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

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        // this.state = {navExpanded: false};
    }

    onSelect(e) {
        console.log('OnSelect')
    }

    toggleNav() { console.log('toggle...') };

    setNavExpanded(expanded) {
        this.setState({ navExpanded: expanded });
    }

    closeNav() {
        this.setState({ navExpanded: false });
    }


    render() {
        return (
            <Navbar className="d-none d-xl-block" expand="lg">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
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
                </Navbar.Collapse>
            </Navbar>
        )
    }

}

export default Menu
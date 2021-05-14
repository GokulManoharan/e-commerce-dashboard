import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import SideBar from './Components/SideBar/SideBar';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import MainSection from './Components/MainSection/MainSection';
import ItemsContext from './Contexts/itemsContext';

import './App.css';

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const App = _ => {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [itemsInCart, setItemsInCart] = useState([]);

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setIsTablet(getWindowDimensions().width <= 1200 ? true : false);
        setIsMobile(getWindowDimensions().width <= 575 ? true : false);
    }, [windowDimensions])

    return (
        <div className="app">
            <Row className="app-row">
                <Col md={2} className="side-bar-col d-none d-xl-block">
                    <SideBar />
                </Col>
                <Col md={(isTablet && !isMobile) ? 12 : 10} className="app-content-column">
                    <div className="content">
                        <Row>
                            <Col>
                                <ItemsContext.Provider value={{
                                    cartItems: itemsInCart,
                                    setCartItems: setItemsInCart
                                }}>
                                    <NavigationBar />
                                </ItemsContext.Provider>
                            </Col>
                        </Row>
                        <MainSection isTablet={isTablet} isMobile={isMobile} />
                    </div>
                </Col>
            </Row>
        </div >
    )
}

export default App
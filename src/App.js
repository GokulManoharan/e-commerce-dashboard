import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import SideBar from './Components/SideBar/SideBar';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Tile from './Components/Tile/Tile';
import PriceRow from './Components/Contents/PriceRow';
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

          <Row>
            <Col lg={(isTablet && !isMobile) ? 6 : 4} md={(isTablet && !isMobile) ? 6 : 4} sm={6} xs={12}>
              <Tile height={(isTablet && !isMobile) ? '15rem' : isMobile ? '12em' : '10em'}>
                <div className="small-card-content">
                  <Row>
                    <Col>
                      <span>Title</span>
                    </Col>
                  </Row>
                  <Row className="content-row">
                    <Col>
                      <span className="free-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                    </Col>
                  </Row>
                </div>
              </Tile>
            </Col>
            <Col md={(isTablet && !isMobile) ? 6 : 8} sm={6} xs={12}>
              <Tile height={(isTablet && !isMobile) ? '15rem' : isMobile ? '25em' : '10em'}>
                <div className="small-card-content">
                  <Row className="card-content-row">
                    <Col className="card-content-col">
                      <span>Title</span>
                      <span className="category-title-span updated-text">Updated 2 month(s) ago</span>
                    </Col>
                  </Row>
                  <Row className="content-row product-content-row">
                    <PriceRow isTablet={isTablet} isMobile={isMobile} />
                  </Row>
                </div>
              </Tile>
            </Col>
          </Row>

          <Row>
            <Col md={(isTablet && !isMobile) ? 12 : 4} sm={12}>
              <Row>
                <Col md={(isTablet && !isMobile) ? 3 : 6} sm={(isTablet && !isMobile) ? 3 : 6} xs={6}>
                  <Tile height="10rem" />
                </Col>
                <Col md={(isTablet && !isMobile) ? 3 : 6} sm={(isTablet && !isMobile) ? 3 : 6} xs={6}>
                  <Tile height="10rem" />
                </Col>
                <Col md={(isTablet && !isMobile) ? 6 : 12} sm={(isTablet && !isMobile) ? 6 : 12} xs={12}>
                  <Tile height="10rem" />
                </Col>
              </Row>
            </Col>
            <Col md={(isTablet && !isMobile) ? 12 : 8} sm={12}>
              <Tile height={(isMobile || isTablet) ? "10rem" : "22rem"}>
                <div className="center-text-tile">
                  <span>I am  text centered</span>
                </div>
              </Tile>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Tile height="16.5rem" />
            </Col>
            <Col md={6}>
              <Tile height="16.5rem" />
            </Col>
          </Row>

          </div>
        </Col>
      </Row>


    </div >
  )
}

export default App
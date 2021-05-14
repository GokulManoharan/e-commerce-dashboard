import React from "react";
import { Row, Col } from "react-bootstrap";

import Tile from "../Tile/Tile";
import ProductRow from "../Contents/ProductRow";

import "./MainSection.css";

const MainSection = ({isTablet, isMobile}) => (
    <>
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
                            <ProductRow isTablet={isTablet} isMobile={isMobile} />
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
    </>
)

export default MainSection
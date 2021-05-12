import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import './PriceRow.css';

const ProductDetails = ({ i }) => {
    return (
        <>
            <div className={`prod-image product-${i + 1}`}>
                <span>
                    img
                </span>
            </div>
            <div className="prod-text">
                <span>999k</span>
                <span>Lorem</span>
            </div>
        </>
    )
}

const PriceRow = ({ isMobile, isTablet }) => {

    const [products] = useState(["prod1", "prod2", "prod3", "prod4"]);

    return (
        <>
            {
                products.map((color, i) => {
                    return (
                        <Col lg={(isTablet && !isMobile) ? 6 : 3} md={(isTablet && !isMobile) ? 6 : 3} sm={(isTablet && !isMobile) ? 6 : 3} xs={12} className="product-col">
                            <ProductDetails i={i} />
                        </Col>
                    )
                })
            }
        </>
    )
}

export default PriceRow
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';

import './ProductRow.css';

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
                <span className="prod-name">Lorem</span>
            </div>
        </>
    )
}

const ProductRow = ({ isMobile, isTablet }) => {

    const [products] = useState(["prod1", "prod2", "prod3", "prod4"]);

    return (
        <>
            {
                products.map((prod, i) => {
                    return (
                        <React.Fragment key={prod} >
                            <Col lg={(isTablet && !isMobile) ? 6 : 3} md={(isTablet && !isMobile) ? 6 : 3} sm={(isTablet && !isMobile) ? 6 : 3} xs={12} className="product-col">
                                <ProductDetails i={i} />
                            </Col>
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export default ProductRow
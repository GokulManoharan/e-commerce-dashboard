import React from 'react';

import './SmallCard.css'

const SmallCard = props => {

    return (
        <div className="small-card" style={{
            height: props.height
        }}>
            {props.children}
        </div>
    )
}

export default SmallCard

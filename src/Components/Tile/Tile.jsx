import React from 'react';

import './Tile.css'

const Tile = props => {

    return (
        <div className="small-card" style={{
            height: props.height
        }}>
            {props.children}
        </div>
    )
}

export default Tile

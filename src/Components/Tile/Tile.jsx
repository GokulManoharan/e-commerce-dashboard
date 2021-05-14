import React from 'react';

import './Tile.css'

const Tile = ({ height, children }) => (
    <div className="tile" style={{
        height
    }}>
        {children}
    </div>
)

export default Tile

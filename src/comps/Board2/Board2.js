import React, { Component } from 'react';
import Tile from '../Tile/Tile.js';
import './Board2.css'

class Board extends Component {


    render() {
        return (

            <div className="board2">
                <div className="tiles">
                    {this.props.data.map((obj, index) => {
                        return <Tile x={obj.x} y={obj.y} color={obj.color} state={obj.selected} key={index} disabled={true} />
                    })}
                </div>
            </div>
        );
    }
}

export default Board;
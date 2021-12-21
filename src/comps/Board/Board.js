import React, { Component } from 'react';
import Tile from '../Tile/Tile.js';
import './Board.css'

class Board extends Component {

    constructor(props) {
        super(props)

        this.def = [
            [{ "x": 0, "y": 0, "color": "red", "selected": true }, { "x": 1, "y": 0, "color": "red", "selected": false }, { "x": 2, "y": 0, "color": "red", "selected": true }, { "x": 0, "y": 1, "color": "red", "selected": true }, { "x": 1, "y": 1, "color": "red", "selected": false }, { "x": 2, "y": 1, "color": "red", "selected": true }, { "x": 0, "y": 2, "color": "red", "selected": true }, { "x": 1, "y": 2, "color": "red", "selected": true }, { "x": 2, "y": 2, "color": "red", "selected": true }, { "x": 0, "y": 3, "color": "red", "selected": false }, { "x": 1, "y": 3, "color": "red", "selected": false }, { "x": 2, "y": 3, "color": "red", "selected": true }, { "x": 0, "y": 4, "color": "red", "selected": false }, { "x": 1, "y": 4, "color": "red", "selected": false }, { "x": 2, "y": 4, "color": "red", "selected": true }],
            [{ "x": 0, "y": 0, "color": "red", "selected": true }, { "x": 1, "y": 0, "color": "red", "selected": true }, { "x": 2, "y": 0, "color": "red", "selected": true }, { "x": 0, "y": 1, "color": "red", "selected": false }, { "x": 1, "y": 1, "color": "red", "selected": true }, { "x": 2, "y": 1, "color": "red", "selected": false }, { "x": 0, "y": 2, "color": "red", "selected": false }, { "x": 1, "y": 2, "color": "red", "selected": true }, { "x": 2, "y": 2, "color": "red", "selected": false }, { "x": 0, "y": 3, "color": "red", "selected": false }, { "x": 1, "y": 3, "color": "red", "selected": true }, { "x": 2, "y": 3, "color": "red", "selected": false }, { "x": 0, "y": 4, "color": "red", "selected": true }, { "x": 1, "y": 4, "color": "red", "selected": true }, { "x": 2, "y": 4, "color": "red", "selected": true }],
            [{ "x": 0, "y": 0, "color": "red", "selected": false }, { "x": 1, "y": 0, "color": "red", "selected": false }, { "x": 2, "y": 0, "color": "red", "selected": true }, { "x": 0, "y": 1, "color": "red", "selected": false }, { "x": 1, "y": 1, "color": "red", "selected": false }, { "x": 2, "y": 1, "color": "red", "selected": true }, { "x": 0, "y": 2, "color": "red", "selected": true }, { "x": 1, "y": 2, "color": "red", "selected": true }, { "x": 2, "y": 2, "color": "red", "selected": true }, { "x": 0, "y": 3, "color": "red", "selected": true }, { "x": 1, "y": 3, "color": "red", "selected": false }, { "x": 2, "y": 3, "color": "red", "selected": true }, { "x": 0, "y": 4, "color": "red", "selected": true }, { "x": 1, "y": 4, "color": "red", "selected": true }, { "x": 2, "y": 4, "color": "red", "selected": true }],
            [{ "x": 0, "y": 0, "color": "red", "selected": true }, { "x": 1, "y": 0, "color": "red", "selected": true }, { "x": 2, "y": 0, "color": "red", "selected": true }, { "x": 0, "y": 1, "color": "red", "selected": false }, { "x": 1, "y": 1, "color": "red", "selected": false }, { "x": 2, "y": 1, "color": "red", "selected": true }, { "x": 0, "y": 2, "color": "red", "selected": true }, { "x": 1, "y": 2, "color": "red", "selected": true }, { "x": 2, "y": 2, "color": "red", "selected": true }, { "x": 0, "y": 3, "color": "red", "selected": true }, { "x": 1, "y": 3, "color": "red", "selected": false }, { "x": 2, "y": 3, "color": "red", "selected": false }, { "x": 0, "y": 4, "color": "red", "selected": true }, { "x": 1, "y": 4, "color": "red", "selected": true }, { "x": 2, "y": 4, "color": "red", "selected": true }]
        ]

        let selected = this.def[this.props.index].filter(obj => obj.selected === true).map(obj => { return { x: obj.x, y: obj.y } })

        this.state = {
            selected: selected
        }

        this.handleTileClick = this.handleTileClick.bind(this)
        this.handleSave = this.handleSave.bind(this)


    }

    handleTileClick(x, y, state) {
        if (state === false) {
            this.setState({
                selected: this.state.selected.filter(obj => obj.x === x && obj.y === y)
            })
        } else {
            this.setState({
                selected: [...this.state.selected, { x: x, y: y }]
            })
        }
    }

    handleSave(e) {
        let tab = []

        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 3; x++) {
                let selected = this.state.selected.find(obj => obj.x === x && obj.y === y) === undefined ? false : true

                tab.push(
                    {
                        x: x,
                        y: y,
                        color: this.props.color,
                        selected: selected
                    }
                )
            }
        }
        console.log(JSON.stringify(tab))
        this.props.onSave(tab)
    }

    render() {
        let tiles = []

        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 3; x++) {

                let state = this.def[this.props.index].find(obj => obj.x === x && obj.y === y).selected
                tiles.push(
                    <Tile x={x} y={y} color={this.props.color} state={state} handleClick={this.handleTileClick} key={'x' + x + 'y' + y} />
                )
            }
        }
        return (

            <div className="board" style={{ border: `5px solid ${this.props.border_color}` }}>
                <span>
                    plansza <br />
                    {this.props.title} <br />
                    {this.props.id}
                </span>
                <div className="tiles">
                    {tiles}
                </div>
                <button onClick={this.handleSave}>zapisz</button>
            </div>
        );
    }
}

export default Board;
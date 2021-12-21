import React, { Component } from 'react';
import './Tile.css'

class Tile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            state: this.props.state
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        if (this.props.disabled === true) {
            return
        }
        console.log(this.props.x, this.props.y)
        this.setState({
            state: !this.state.state
        }, () => {
            this.props.handleClick(this.props.x, this.props.y, this.state.state)
        })
    }

    render() {
        let style = this.state.state ? this.props.color : 'initial'
        return (
            <div className="tile" onClick={this.handleClick} style={{ backgroundColor: style }}>

            </div>
        );
    }
}

export default Tile;
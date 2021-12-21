import './App.css';

import Board from './comps/Board/Board'
import Board2 from './comps/Board2/Board2.js'

import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.data = this.props.data
    this.colors = ['red', 'orange', 'yellow', 'pink']
    this.state = {
      color: this.colors[0],
      saved: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  handleChange(e) {
    this.setState({
      color: e.target.value
    })
  }

  handleSave(obj) {

    this.setState({
      saved: [...this.state.saved, obj]
    }, () => {
      console.log(this.state.saved)
    }
    )
  }

  render() {
    let options = this.colors.map((obj, index) => {
      return <option name="color" value={obj} key={index}>{obj}</option>
    })
    return (
      <div className="App">
        <h1>Sprawdzian React ver D</h1>
        <div id="main" className="border">
          <div id="left" className="border">
            boards
            <form onChange={this.handleChange}>
              <select>
                {options}
              </select>
            </form>
            <div className="boards">
              {
                this.data.map((obj, index) => {
                  return <Board index={index} border_color={obj.color} color={this.state.color} title={obj.title} id={obj.id} key={obj.id} onSave={this.handleSave} />
                })
              }
            </div>
            <button onClick={() => { this.setState({ saved: [] }) }}>usuń wszystko </button>
          </div>

          <div id="right" className="border">
            selected
            {this.state.saved.map((obj, index) => {
              return <Board2 data={obj} key={index} />
            })}
          </div>
        </div>
      </div >
    );
  }
}

export default App;

import React, { Component } from 'react';

import ControlButtons from './ControlButtons';
import Grid from './Grid';

class App extends Component {
  constructor() {
    super();
    const gridSize = 50;
    const grid = this.generateRandomGrid(gridSize);
    this.state ={
      grid: grid,
      gameState: "active",

    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(gameState) {
    this.setState({gameState: gameState})
    ;

  }
  generateRandomGrid(gridSize) {
    const randomGrid = [];
    for(let row=0; row<gridSize; row++) {
      const newRow = [];
      for(let cell=0; cell<gridSize; cell++) {
        if(Math.random() > .85) {
          newRow.push(1);
        } else {
          newRow.push(0);
        }
      }
      randomGrid.push(newRow);
    }
    return randomGrid;
  }
  nextGeneration(currGen) {
    return currGen.map((row, x)=> {
      return row.map((cell, y)=> {
        if (x === 0) {

        }
      });
    });
  }
  render() {
    return (
      <div className="App">
        <ControlButtons handleClick={this.handleClick} />
        <Grid grid={this.state.grid} />

      </div>
    );
  }
}

export default App;

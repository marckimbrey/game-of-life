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
    this.setState({gameState: gameState});

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

    const nextGen = currGen.map((row, x)=> {
      return row.map((cell, y)=> {
        let neighbours = 0;
        if (x === 0) { // top row
          if (y === 0) { // top left
            const right = currGen[x][y+1];
            const bottomMiddle = currGen[x+1][y];
            const bottomRight = currGen[x+1][y+1];
            neighbours += right;
            neighbours += bottomMiddle;
            neighbours += bottomRight;

          } else if (y === row.length-1) { // top right
            const left = currGen[x][y-1];
            const bottomLeft = currGen[x+1][y-1];
            const bottomMiddle = currGen[x+1][y];
            neighbours += left;
            neighbours += bottomMiddle;
            neighbours += bottomLeft;

          } else {
            const left = currGen[x][y-1];
            const right = currGen[x][y+1];
            const bottomLeft = currGen[x+1][y-1];
            const bottomMiddle = currGen[x+1][y];
            const bottomRight = currGen[x+1][y+1];
            neighbours += left;
            neighbours += right;
            neighbours += bottomLeft;
            neighbours += bottomMiddle;
            neighbours += bottomRight;
          }
        } else if (x === row.length -1) { // bottom row
          if (y === 0) { // bottom left
            const right = currGen[x][y+1];
            const topMiddle = currGen[x-1][y];
            const topRight = currGen[x-1][y+1];
            neighbours += right;
            neighbours += topMiddle;
            neighbours += topRight;
          } else if (y === row.length-1) { // bottom right
            const left = currGen[x][y-1];
            const topLeft = currGen[x-1][y-1];
            const topMiddle = currGen[x-1][y];
            neighbours += left;
            neighbours += topMiddle;
            neighbours += topLeft;
          } else {
            const left = currGen[x][y-1];
            const right = currGen[x][y+1];
            const topLeft = currGen[x-1][y-1];
            const topMiddle = currGen[x-1][y];
            const topRight = currGen[x-1][y+1];
            neighbours += left;
            neighbours += right;
            neighbours += topLeft;
            neighbours += topMiddle;
            neighbours += topRight;
          }
        } else if (y === 0) { // left column
          const right = currGen[x][y+1];
          const topMiddle = currGen[x-1][y];
          const topRight = currGen[x-1][y+1];
          const bottomMiddle = currGen[x+1][y];
          const bottomRight = currGen[x+1][y+1];
          neighbours += right;
          neighbours += topMiddle;
          neighbours += topRight;
          neighbours += bottomMiddle;
          neighbours += bottomRight;
        } else if (y === row.length -1) { // right column
          const left = currGen[x][y-1];
          const topMiddle = currGen[x-1][y];
          const topLeft = currGen[x-1][y-1];
          const bottomMiddle = currGen[x+1][y];
          const bottomLeft = currGen[x+1][y-1];
          neighbours += left;
          neighbours += topMiddle;
          neighbours += topLeft;
          neighbours += bottomMiddle;
          neighbours += bottomLeft;
        } else { // not edge cell
          const topLeft = currGen[x-1][y-1];
          const topMiddle = currGen[x-1][y];
          const topRight = currGen[x-1][y+1];
          const left = currGen[x][y-1];
          const right = currGen[x][y+1];
          const bottomLeft = currGen[x+1][y-1];
          const bottomMiddle = currGen[x+1][y];
          const bottomRight = currGen[x+1][y+1];
          neighbours += topLeft;
          neighbours += topMiddle;
          neighbours += topRight;
          neighbours += left;
          neighbours += right;
          neighbours += bottomRight;
          neighbours += bottomMiddle;
          neighbours += bottomLeft;

        }

        if (cell === 1 && neighbours === 2) {
          return 1;
        } else if (neighbours === 3) {
          return 1;
        }
        return 0;
      });
    });

    this.setState({grid: nextGen});
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

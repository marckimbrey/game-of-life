import React, { Component } from 'react';

import GenerationCounter from './GenerationCounter';
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
      generation: 0

    };
    this.handleClick = this.handleClick.bind(this);
    this.nextGeneration = this.nextGeneration.bind(this);
    this.onCellClick = this.onCellClick.bind(this);
  }
  handleClick(gameState) {
    if (gameState === 'clear') {
       const emptyGrid = this.state.grid.map((row)=> {
         return  row.map((cell)=> {
           return 0;
         });
       });
       this.setState({
         grid: emptyGrid,
         gameState: 'paused',
         generation: 0
       });
    } else {
      this.setState({gameState: gameState});
    }
  }
  onCellClick(x, y) {
    let grid = this.state.grid;
    grid[x][y] = grid[x][y] === 1?  0 :  1;
    this.setState({grid: grid});
  }
  componentDidMount() {
    setInterval(()=> {
      if (this.state.gameState === 'active') {
        this.nextGeneration(this.state.grid, this.state.generation);
      }
    }, 300);
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
  nextGeneration(currGen, gen) {
    const searchNeighbors = [[-1,-1], [-1, 0], [-1, 1],
                   [0, -1],          [0, 1],
                   [1, -1], [1, 0],  [1, 1]];

    const nextGen = currGen.map((row, x)=> {
      return row.map((cell, y)=> {
        let neighbours = 0;
       searchNeighbors.forEach((pos) => {
           const r = x + pos[0];
           const c = y + pos[1];

           // If the cell is "out of bounds" ignore
           if (r < 0 || c < 0 || r >= currGen.length || c >= currGen.length) {
               return;
           } else if (currGen[r][c]) {
               neighbours++;
           }
       });

        if (cell === 1 && neighbours === 2) {
          return 1;
        } else if (neighbours === 3) {
          return 1;
        }
        return 0;
      });
    });
    gen++
    this.setState({
      grid: nextGen,
      generation: gen
    });
  }
  render() {
    return (
      <div className="App">
        <GenerationCounter generation={this.state.generation} />
        <ControlButtons
          handleClick={this.handleClick}/>
        <Grid
          grid={this.state.grid}
          onCellClick={this.onCellClick}
        />

      </div>
    );
  }
}

export default App;

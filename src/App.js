import React, { Component } from 'react';

import ControlButtons from './ControlButtons';
import Grid from './Grid';

class App extends Component {
  constructor() {
    super();
    const grid = [
      [0,1,0,0,1,1,0,0,0,1],
      [0,1,0,0,1,1,0,0,0,1],
      [0,0,1,0,1,1,0,1,0,1],
      [0,0,0,0,1,1,1,0,0,0],
      [1,0,1,0,1,1,0,0,0,1],
      [0,0,1,0,0,1,0,0,0,0],
      [0,0,1,0,0,1,0,0,0,1],
      [0,0,1,0,1,0,0,0,0,1],
      [1,0,1,0,1,1,0,0,0,0],
      [0,0,1,0,1,1,0,0,0,0]
    ];
    this.state ={grid: grid};

  }
  render() {
    return (
      <div className="App">
        <ControlButtons />
        <Grid grid={this.state.grid} />

      </div>
    );
  }
}

export default App;

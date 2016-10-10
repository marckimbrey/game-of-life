import React, {Component} from 'react';

export default class Grid extends Component {
  constructor(props) {
    super();

    this.grid = props.grid;
  }
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {

    const ctx = this.refs.canvas.getContext('2d');
      this.grid.forEach((row, x)=> {
        row.forEach((cell, y)=> {
          if(cell === 1) {
            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fillRect(x*8, y*8, 8, 8);
          }
        });
      });
  }
  render() {
    return(<canvas ref="canvas" width={400} height={400}></canvas>);
  }
}

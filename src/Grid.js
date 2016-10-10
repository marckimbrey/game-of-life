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
      this.grid.map((row, x)=> {
        row.map((cell, y)=> {
          if(cell === 1) {
            ctx.fillStyle = "rgb(200,0,0)";
            console.log(x,y);
            ctx.fillRect(x *40, y*40, 40, 40);
          }
        });
      });
  }
  render() {
    return(<canvas ref="canvas" width={400} height={400}></canvas>);
  }
}
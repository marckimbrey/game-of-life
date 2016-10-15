import React from 'react';
import GridRow from './GridRow';

export default (props) => {
    let grid = props.grid.map((row, x)=> {
      return <GridRow gridRow={props.grid[x]} key={x}/>;
    });

    return(<table><tbody>{grid}</tbody></table>);
}

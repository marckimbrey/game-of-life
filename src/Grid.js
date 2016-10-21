import React from 'react';
import GridRow from './GridRow';

export default (props) => {
    let grid = props.grid.map((row, x)=> {
      return <GridRow
                gridRow={props.grid[x]}
                key={x}
                coords={[x]}
                onCellClick={props.onCellClick}
                />;
    });

    return(<table style={{height: window.innerWidth > 939? 940 * 0.6: window.innerWidth }}><tbody>{grid}</tbody></table>);
}

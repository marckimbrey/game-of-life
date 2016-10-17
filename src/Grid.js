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

    return(<table><tbody>{grid}</tbody></table>);
}

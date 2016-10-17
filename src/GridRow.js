import React from 'react';
import GridCell from './GridCell';

export default (props)=> {
  const gridRow = props.gridRow.map((cell, y)=> {
    return <GridCell
            gridCell={props.gridRow[y]}
            key={y}
            coords={[props.coords, y]}
            onCellClick={props.onCellClick}
            />
  });
  return (
    <tr>
      {gridRow}
    </tr>
  )
}

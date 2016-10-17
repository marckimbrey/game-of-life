import React from 'react';

export default (props)=> {

    if (props.gridCell === 1) {
      return (
        <td
        style={{backgroundColor: 'red'}}
        onClick={()=> props.onCellClick(props.coords[0],props.coords[1])}
        ></td>);
    }
    return (
      <td
        onClick={()=> props.onCellClick(props.coords[0],props.coords[1])}
      ></td>
    );
}

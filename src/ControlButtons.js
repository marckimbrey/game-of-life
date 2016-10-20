import React from 'react';

export default (props)=> {
  return (
    <div>
      <button
        onClick={()=> props.handleClick("active")}
      >Play</button>
      <button
        onClick={()=> props.handleClick("paused")}
      >Pause</button>
      <button
        onClick={()=> props.handleClick("clear")}
      >Clear</button>
      <button
        onClick={()=> props.handleClick("random")}
      >Random</button>
    </div>
  );
}

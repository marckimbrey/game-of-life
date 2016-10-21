import React from 'react';

export default (props)=> {
  return (
    <div className="control-btns">
      <button className="btn"
        onClick={()=> props.handleClick("active")}
      >Play</button>
      <button className="btn"
        onClick={()=> props.handleClick("paused")}
      >Pause</button>
      <button className="btn"
        onClick={()=> props.handleClick("clear")}
      >Clear</button>
      <button className="btn"
        onClick={()=> props.handleClick("random")}
      >Random</button>
    </div>
  );
}

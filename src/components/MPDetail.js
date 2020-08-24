import React from 'react';

const MPDetail = (props) => {
  if(!props.mp) return null;
  return(
    <div>
      <h3>{props.mp.DisplayAs}</h3>
    </div>
  );
}

export default MPDetail

import React from 'react';

const MPDetail = (props) => {
  if(!props.mp) return null;
  return(
    <div>
      <h3>Name: {props.mp.DisplayAs}</h3>
      <h4>Constituency: {props.mp.MemberFrom}</h4>
      <h4>Party: {props.mp.Party[0]._}</h4>
    </div>
  );
}

export default MPDetail

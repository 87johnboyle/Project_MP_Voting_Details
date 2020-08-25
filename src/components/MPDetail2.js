import React from 'react';


const MPDetail2 = (props) => {
  if(!props.mp2) return null;
  return(
    <div>
      <h3>{props.mp2.DisplayAs}</h3>
      <img src={'http://data.parliament.uk/membersdataplatform/services/images/MemberPhoto/'+props.mp2.$.Member_Id} alt="MP"/>
      <h4>Constituency: {props.mp2.MemberFrom}</h4>
      <h4>Party: {props.mp2.Party[0]._}</h4>

    </div>
  );
}

export default MPDetail2

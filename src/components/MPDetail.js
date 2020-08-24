import React from 'react';


const MPDetail = (props) => {
  if(!props.mp) return null;
  return(
    <div>
      <h3>{props.mp.DisplayAs}</h3>
      <img src={'http://data.parliament.uk/membersdataplatform/services/images/MemberPhoto/'+props.mp.$.Member_Id} alt="MP"/>
      <h4>Constituency: {props.mp.MemberFrom}</h4>
      <h4>Party: {props.mp.Party[0]._}</h4>

    </div>
  );
}

export default MPDetail

import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class MPDetail2 extends Component {

render(){
  if(!this.props.mp2) return null;
  if(!this.props.vote2) return null;

  const votes = this.props.vote2.ArrayOfMemberVotingRecord.MemberVotingRecord

  return(
    <div className="details">
      <div className="info">
      <img src={'http://data.parliament.uk/membersdataplatform/services/images/MemberPhoto/'+this.props.mp2.$.Member_Id} alt="MP"/>
      <h2>{this.props.mp2.DisplayAs}</h2>
      <h3>Constituency</h3> <p>{this.props.mp2.MemberFrom}</p>
      <h3>Party</h3> <p>{this.props.mp2.Party[0]._}</p>
      </div>
    </div>
  );
}
}

export default MPDetail2

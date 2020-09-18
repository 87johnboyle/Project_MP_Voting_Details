import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class MPDetail extends Component {

render(){
  if(!this.props.mp) return null;
  if(!this.props.vote) return null;

  const votes = this.props.vote.ArrayOfMemberVotingRecord.MemberVotingRecord

  return(
    <div className="details">
      <div className="info">
      <img src={'http://data.parliament.uk/membersdataplatform/services/images/MemberPhoto/'+this.props.mp.$.Member_Id} alt="MP"/>
      <h2>{this.props.mp.DisplayAs}</h2>
      <h3>Constituency</h3> <p>{this.props.mp.MemberFrom}</p>
      <h3>Party</h3> <p>{this.props.mp.Party[0]._}</p>
      </div>
    </div>
  );
}
}

export default MPDetail

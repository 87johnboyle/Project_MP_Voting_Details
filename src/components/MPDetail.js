import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class MPDetail extends Component {

render(){
  if(!this.props.mp) return null;
  if(!this.props.vote) return null;

  const votes = this.props.vote.ArrayOfMemberVotingRecord.MemberVotingRecord

  return(
    <div className="details">
      <h3>{this.props.mp.DisplayAs}</h3>
      <img src={'http://data.parliament.uk/membersdataplatform/services/images/MemberPhoto/'+this.props.mp.$.Member_Id} alt="MP"/>
      <h4>Constituency: {this.props.mp.MemberFrom}</h4>
      <h4>Party: {this.props.mp.Party[0]._}</h4>
      {votes.map(vote => (
        <li key={uuidv4()}>{vote.PublishedDivision[0].Title} {vote.MemberVotedAye.toString().replace('true', '✅').replace('false', '⛔️')}
        </li>
      ))}
    </div>
  );
}
}

export default MPDetail

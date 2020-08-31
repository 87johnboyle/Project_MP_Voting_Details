import React, { Component } from 'react';


class MPDetail2 extends Component {

render(){
  if(!this.props.mp2) return null;
  if(!this.props.vote2) return null;
  return(
    <div>
      <h3>{this.props.mp2.DisplayAs}</h3>
      <img src={'http://data.parliament.uk/membersdataplatform/services/images/MemberPhoto/'+this.props.mp2.$.Member_Id} alt="MP"/>
      <h4>Constituency: {this.props.mp2.MemberFrom}</h4>
      <h4>Party: {this.props.mp2.Party[0]._}</h4>
      <p>Vote:{this.props.vote2.ArrayOfMemberVotingRecord.MemberVotingRecord[0].MemberId}</p>
    </div>
  );
}
}

export default MPDetail2

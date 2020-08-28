import React, { Component } from 'react';

class MPDetail extends Component {
constructor(props){
  super(props);
  this.state={
    voteData:[]
  }
}

render(){
  if(!this.props.mp) return null;
  return(
    <div>
      <h3>{this.props.mp.DisplayAs}</h3>
      <img src={'http://data.parliament.uk/membersdataplatform/services/images/MemberPhoto/'+this.props.mp.$.Member_Id} alt="MP"/>
      <h4>Constituency: {this.props.mp.MemberFrom}</h4>
      <h4>Party: {this.props.mp.Party[0]._}</h4>

    </div>
  );
}
}

export default MPDetail

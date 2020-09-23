import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class MPVotesCombined extends Component {

render(){
  if(!this.props.voteDataAll) return null;
  if(!this.props.vote) return null;
  if(!this.props.vote2) return null;

let voteTitles1 = this.props.vote.ArrayOfMemberVotingRecord.MemberVotingRecord.map(vote => {
  return vote.PublishedDivision[0].Title[0]
})

let voteAye1 = this.props.vote.ArrayOfMemberVotingRecord.MemberVotingRecord.map(vote => {
  return vote.MemberVotedAye[0]
})

let votesCombined1 = {}, i,
keys = voteTitles1,
values = voteAye1;

for (i = 0; i < keys.length; i++) {
  votesCombined1[keys[i]] = values[i];
}

let voteTitles2 = this.props.vote2.ArrayOfMemberVotingRecord.MemberVotingRecord.map(vote => {
  return vote.PublishedDivision[0].Title[0]
})

let voteAye2 = this.props.vote2.ArrayOfMemberVotingRecord.MemberVotingRecord.map(vote => {
  return vote.MemberVotedAye[0]
})

let votesCombined2 = {}, a,
keys2 = voteTitles2,
values2 = voteAye2;

for (a = 0; a < keys2.length; a++) {
  votesCombined2[keys2[a]] = values2[a];
}

let vtAll = voteTitles1.concat(voteTitles2.filter((item) => voteTitles1.indexOf(item) < 0))

let votes = [votesCombined1, votesCombined2];

let outputObj =  {};
for (const qVal of vtAll){
  for (const obj of votes){
    if (obj.hasOwnProperty(qVal)) {
      if (!outputObj.hasOwnProperty(qVal)){
        // new qVal that doesn't exist in output
        outputObj[qVal] = [obj[qVal]];
      } else {
        outputObj[qVal].push(obj[qVal]);
      }
    }
  }
}

console.log(outputObj)

  return(
    <div>
    <div className="votes">
    {Object.entries(outputObj).map(([key, value]) =>
    <p>{key} : {value}</p>)}
    </div>
    </div>
  )
}


}

export default MPVotesCombined

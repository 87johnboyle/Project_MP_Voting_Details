import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class MPVotesCombined extends Component {

render(){
  if(!this.props.voteDataAll) return null;
  if(!this.props.vote) return null;
  if(!this.props.vote2) return null;

const voteDataAll = this.props.voteDataAll.ArrayOfPublishedDivision.PublishedDivision

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

console.log(votesCombined1)
console.log(votesCombined2)

  return(
    <div>
    <div className="votes">
    {voteDataAll.map(vote => (
      <li key={uuidv4()}>{vote.Title}
      </li>
    ))}
    </div>
    </div>
  )
}


}

export default MPVotesCombined

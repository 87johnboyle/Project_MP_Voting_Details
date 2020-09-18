import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class MPVotesCombined extends Component {

render(){
  if(!this.props.voteDataAll) return null;
  if(!this.props.vote) return null;
  if(!this.props.vote2) return null;

const voteDataAll = this.props.voteDataAll.ArrayOfPublishedDivision.PublishedDivision

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

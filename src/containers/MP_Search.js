import React, { Component } from 'react';
import MPSelector from '../components/MPSelector.js';
import MPDetail from '../components/MpDetail.js';
import Dots from 'react-activity/lib/Dots';
import 'react-activity/dist/react-activity.css';

class MPSearch extends Component {
  constructor(props){
      super(props);
      this.state = {
        data:[],
        loading: true,
        selectedMP: null
      };
      this.handleMPSelected = this.handleMPSelected.bind(this);
  }

  componentDidMount = () => {
     fetch('http://data.parliament.uk/membersdataplatform/services/mnis/members/query/House=Commons%7CIsEligible=true', {
        method: 'GET'
     })
             .then((response) => response.text())
             .then((responseText) => {
            parseString(responseText, (err, result) => {
              if(result) {
                this.setState({ data: result, loading: false })
              }
             })
            })
         .catch((error) => {
           console.log('Error fetching data -  ', error);
         });
  }

  handleMPSelected(index){
   const selectedMP = this.state.data[index];
   this.setState({selectedMP: selectedMP});
 }

 render(){
  if(!loading){
    return(
      <div>
        <h2>MP</h2>
        <MPSelector data={this.state.mp}
          onMPSelected={this.handleMPSelected} />
          <MPDetail mp={this.state.selectedMP} />
      </div>
    );
  }
  else {
    return (
    <Dots />
}
}
}

export default MPSearch

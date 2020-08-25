import React, { Component } from 'react';
import MPSelector from '../components/MPSelector.js';
import MPDetail from '../components/MPDetail.js';
import MPDetail2 from '../components/MPDetail.js';
import Dots from 'react-activity/lib/Dots';
import 'react-activity/dist/react-activity.css';
import { parseString } from 'react-native-xml2js'

class MPSearch extends Component {
  constructor(props){
      super(props);
      this.state = {
        data:[],
        loading: true,
        selectedMP: null,
        selectedMP2:null
      };
      this.handleMPSelected = this.handleMPSelected.bind(this);
      this.handleMP2Selected = this.handleMP2Selected.bind(this);
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
                console.log(this.state.data.Members.Member[0].DisplayAs)
              }
             })
            })
         .catch((error) => {
           console.log('Error fetching data -  ', error);
         });
  }

  handleMPSelected(index){
   const selectedMP = this.state.data.Members.Member[index];
   this.setState({selectedMP: selectedMP});
 }

 handleMP2Selected(index){
  const selectedMP2 = this.state.data.Members.Member[index];
  this.setState({selectedMP2: selectedMP2});
}

 render(){
  if(!this.state.loading){
    return(
      <div>
        <MPSelector data={this.state.data}
          onMPSelected={this.handleMPSelected} />

          <MPDetail mp={this.state.selectedMP} />

          <MPSelector data={this.state.data}
            onMPSelected={this.handleMP2Selected} />

            <MPDetail2 mp={this.state.selectedMP2} />
      </div>
    );
  }
  else {
    return (
    <Dots />
  );
}
}
}

export default MPSearch

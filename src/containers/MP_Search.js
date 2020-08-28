import React, { Component } from 'react';
import MPSelector from '../components/MPSelector.js';
import MPDetail from '../components/MPDetail.js';
import MPDetail2 from '../components/MPDetail.js';
import Dots from 'react-activity/lib/Dots';
import 'react-activity/dist/react-activity.css';
import { parseString } from 'react-native-xml2js';
import '../App.css'

class MPSearch extends Component {
  constructor(props){
      super(props);
      this.state = {
        data:[],
        loading: true,
        selectedMP: null,
        selectedMP2: null,
        mpNumber1:'',
        mpNumber2:'',
        voteData1:null,
        voteData2:null

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
                console.log('MPs Loaded')
              }
             })
            })
         .catch((error) => {
           console.log('Error fetching data -  ', error);
         });
  }

  handleMPSelected(index){
   const selectedMP = this.state.data.Members.Member[index];
   const mpNumber1 = this.state.data.Members.Member[index].$.Member_Id
   this.setState({selectedMP: selectedMP});
   this.setState({mpNumber1: mpNumber1 })
   fetch('https://commonsvotes-services.digiminster.com/data/divisions.xml/membervoting?queryParameters.memberId='+mpNumber1, {
         method: 'GET'
      })
              .then((response) => response.text())
              .then((responseText) => {
             parseString(responseText, (err, result) => {
               if(result) {
                 this.setState({ voteData1: result})
                 console.log('API Success')
               }
              })
             })
          .catch((error) => {
            console.log('Error fetching data -  ', error);
          });
 }

 handleMP2Selected(index){
  const selectedMP2 = this.state.data.Members.Member[index];
  const mpNumber2 = this.state.data.Members.Member[index].$.Member_Id
  this.setState({selectedMP2: selectedMP2});
  this.setState({mpNumber2: mpNumber2 })
  fetch('https://commonsvotes-services.digiminster.com/data/divisions.xml/membervoting?queryParameters.memberId='+mpNumber2, {
        method: 'GET'
     })
             .then((response) => response.text())
             .then((responseText) => {
            parseString(responseText, (err, result) => {
              if(result) {
                this.setState({ voteData2: result})
                console.log('API Success')
              }
             })
            })
         .catch((error) => {
           console.log('Error fetching data -  ', error);
         });

}

 render(){
  if(!this.state.loading){
    return(
      <div>
      <div className ="mp-selector-container">

      <MPSelector
        className="mp-selector-1"
        data={this.state.data}
        onMPSelected={this.handleMPSelected} />

        <MPSelector
          className="mp-selector-2"
          data={this.state.data}
          onMPSelected={this.handleMP2Selected} />

      </div>

      <div className="mp-detail-container">

          <MPDetail
          className="mp-detail-1"
          mp={this.state.selectedMP}
          vote={this.state.voteData1}/>

            <MPDetail2
            className="mp-detail-2"
            mp={this.state.selectedMP2}
            vote={this.state.voteData2}/>
      </div>
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

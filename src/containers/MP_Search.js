import React, { Component } from 'react';
import MPSelector from '../components/MPSelector.js';
import MPSelector2 from '../components/MPSelector2.js';
import MPDetail from '../components/MPDetail.js';
import MPDetail2 from '../components/MPDetail2.js';
import MPVotesCombined from '../components/MPVotesCombined.js';
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
        voteData2:null,
        voteDataAll:null

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

      fetch('https://commonsvotes-services.digiminster.com/data/divisions.xml/search', {
           method: 'GET'
         })
         .then((response) => response.text())
         .then((responseText) => {
        parseString(responseText, (err, result) => {
          if(result) {
            this.setState({ voteDataAll: result})
            console.log('Vote API Success')
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
        data={this.state.data}
        onMPSelected={this.handleMPSelected} />

        <MPSelector2
          data={this.state.data}
          onMP2Selected={this.handleMP2Selected} />

      </div>

      <div className="mp-detail-container">

          <MPDetail
          mp={this.state.selectedMP}
          vote={this.state.voteData1}/>

            <MPDetail2
            mp2={this.state.selectedMP2}
            vote2={this.state.voteData2}/>
      </div>

      <div className="compare-container">

      <MPVotesCombined
        vote={this.state.voteData1}
        vote2={this.state.voteData2}
        voteDataAll={this.state.voteDataAll} />

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

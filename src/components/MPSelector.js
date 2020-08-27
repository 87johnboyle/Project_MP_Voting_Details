import React from 'react';

// this.state.data.Members.Member[0].DisplayAs

const MPSelector = (props) => {
  const options = props.data.Members.Member.map((data, index) => {
    return <option value={index} key={index}>{data.DisplayAs}</option>
  })


  function handleChange(event){
      const selectedIndex = event.target.value;
      props.onMPSelected(selectedIndex);
    }

    return(
        <select id="mp-selector" onChange={handleChange} defaultValue="default">
          <option value="default"> Choose MP </option>
          {options}
        </select>

)}

export default MPSelector

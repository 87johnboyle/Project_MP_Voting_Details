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
      <div>
        <datalist id="suggestions">
          {options}
        </datalist>
        <input autoComplete="on" list="suggestions" placeholder="Choose MP"/>
      </div>
)}

export default MPSelector

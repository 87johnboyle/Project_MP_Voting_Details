import React from 'react';

const MPSelector2 = (props) => {
  const options = props.data.Members.Member.map((data, index) => {
    return <option value={index} key={index}>{data.DisplayAs}</option>
  })


  function handleChange(event){
      const selectedIndex = event.target.value;
            props.onMP2Selected(selectedIndex);
    }

    return(
        <select className="mp-selector" id="mp-selector" onChange={handleChange} defaultValue="default">
          <option value="default"> Choose Second MP </option>
          {options}
        </select>

)}

export default MPSelector2

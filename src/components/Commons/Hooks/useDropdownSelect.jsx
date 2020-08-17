import React, { useState } from "react";

const useDropdownSelect = (label, defaultState, options) => {
  
    const [ state, setState ] = useState(defaultState);
    
    const Dropdownmaker = () => (
      <label htmlFor={label}>
        <h3>{label}</h3>
          <select
          id={label}
          value={state}
          onChange={e=>setState(e.target.value)}
          onBlur={e=>setState(e.target.value)}
          disabled={!options.length}
            >
            {/* <option>Dropdown</option> */}
            {
              options.map( item => <option key={item} value={item}>{item}</option>)
            }
          </select>
    </label>
    );
    return [state, Dropdownmaker, setState]
}

export default useDropdownSelect
import React, { useState } from 'react'
import './InputRange.css'

const InputRange = (props) => {
  const [value, setValue] = useState(2000);
  const MAX = 10000;
  const getBackgroundSize = () => {

    return {
      backgroundSize: `${(value * 100) / MAX}% 100%`,

    };
  };
  return (
    <div className='range'>
      <input
        type="range"
        min="0"
        max={MAX}
        onChange={(e) => {setValue(e.target.value); props.setValue(e.target.value)}}
        style={getBackgroundSize()}
        value={value}
        
      />

    </div>
  )
}

export default InputRange
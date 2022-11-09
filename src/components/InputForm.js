import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 25,
    label: '25',
  },
  {
    value: 50,
    label: '50 ',
  },
  {
    value: 75,
    label: '75 ',
  },
  {
    value: 100,
    label: '100',
  },
];

function valuetext(value) {
  return `${value}°C`;
}
function InputForm(props) {
    return (
        <div className = 'inputForm'>
            <h2 className = 'inputForm' > Minutes</h2>
            <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
        </div>
    );
}

export default InputForm;
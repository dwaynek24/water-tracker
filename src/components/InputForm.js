import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { useState } from "react";
import { Button } from "@mui/material";
import Select from '@mui/material/Select';


const markss = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3 ",
  },
  {
    value: 4,
    label: "4",
  },
];

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 25,
    label: "25",
  },
  {
    value: 50,
    label: "50 ",
  },
  {
    value: 75,
    label: "75 ",
  },
  {
    value: 100,
    label: "100",
  },
];

function valuetext(value) {
  return `${value}`;
}
function valuetext2(value) {
  return `${value}`;
}

function InputForm() {
  const [user, setUser] = useState({
    name: "",
    activity: "",
    frequency: "",
    duration: "",
    gallons: "",
  });

  // 
    
  // };
  function handleChange(event) {
    //SET STATES
    setUser({ ...user, [event.target.name]: event.target.value });
  }

 
  
  // const handleChange = (event) => {
  //   setUser(event.target.value);


  // };

  return (
    <main className="inputForm">
      <h2 className="inputForm"> Activity</h2>
      <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="Type">Type</InputLabel>
            <Select
              labelId="activity"
              id="activity"
              value={user.activity}
              label="Type"
              onChange={handleChange}
            >
              <MenuItem name="shower"  >Shower</MenuItem>
              <MenuItem name="bath"  >Bath</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div>
        <h2>Times per week</h2>
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Always visible"
            defaultValue={0}
            getAriaValueText={valuetext2}
            step={1}
            markss={markss}
            valueLabelDisplay="on"
          />
        </Box>
      </div>

      <h2 className="inputForm"> Minutes</h2>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Always visible"
          defaultValue={0}
          getAriaValueText={valuetext}
          step={1}
          marks={marks}
          valueLabelDisplay="on"
        />
      </Box>
      <div>
        <Button
          onClick={() => {
            console.log(user);
          }}
          variant="contained"
        >
          Submit
        </Button>
      </div>
    </main>
  );
}

export default InputForm;

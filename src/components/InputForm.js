import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { useState } from "react";
import { Button } from "@mui/material";
import Select from '@mui/material/Select';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";





const marks2 = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 15,
    label: "15",
  },
  {
    value: 20,
    label: "20",
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


function InputForm() {
  const [user, setUser] = useState({
    name: "",
    activity: "",
    frequency: "",
    duration: "",
    gallons: "",
  });
  const data = [
    {
      name: "average american",
      Weekly: 100,
      Monthly: 400,
      
    },
    {
      name: "User",
      Weekly: user.duration * 2.5 * user.frequency,
      Monthly:user.duration * 2.5 * user.frequency * 4,
      
    }
    
  ];
  // 
    
  // };
  const handleChange = (event) => {
    //SET STATES
    const name = event.target.name;
    const value = event.target.value;
      setUser((prev)=> {
        return {...prev, [name]:value}
      })
  };
const handleSubmit = ()=>{
  console.log(user)
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
        <InputLabel id="activity">type</InputLabel>
        <Select name="activity"
          labelId="activity"
          id="activity"
          value={user.activity}
          label="activity"
          onChange={handleChange}
        >
          <MenuItem value={"bath"}>bath</MenuItem>
          <MenuItem value={"shower"}>shower</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
      </div>
      <div>
        <h2>Times per week</h2>
        <Box sx={{ width: 300 }}>
          <Slider
          name="frequency"
            aria-label="Always visible"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={1}
            max={20}
            marks={marks2}
            valueLabelDisplay="on"
            onChange={handleChange}
          />
        </Box>
      </div>

      <h2 className="inputForm"> Minutes</h2>
      <Box sx={{ width: 300 }}>
        <Slider
        name="duration"
          aria-label="Always visible"
          defaultValue={0}
          getAriaValueText={valuetext}
          step={1}
          marks={marks}
          valueLabelDisplay="on"
          onChange={handleChange}
        />
      </Box>
      <div>
        <Button
          onClick={() => {
            handleSubmit()
          }}
          variant="contained"
        >
          Submit
        </Button>
      </div>
      <div>
      <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Weekly" fill="#8884d8" />
      <Bar dataKey="Monthly" fill="#82ca9d" />
    </BarChart>
      </div>
    </main>
  );
}

export default InputForm;

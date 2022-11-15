import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import ShowerIcon from "@mui/icons-material/Shower";
import Badge from "@mui/material/Badge";

import { useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
    gallonsWeekly: "",
    gallonsMonthly: "",
  });
  const data = [
    {
      name: "Average American",
      PerShower: 25,
      Weekly: 100,
      Monthly: 400,
    },
    {
      name: "Your Water Use",
      PerShower: user.duration * 2.5,
      Weekly: user.duration * 2.5 * user.frequency,
      Monthly: user.duration * 2.5 * user.frequency * 4,
    },
  ];

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <main className="inputForm">
      
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
            color="secondary"
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
          color="secondary"
          onChange={handleChange}
        />
      </Box>
      <div></div>
      <div>
        <h2>Gallon Count Per Shower</h2>
        <Badge
          max={100000}
          onChange={handleChange}
          badgeContent={user.duration * 2.5}
          color="primary"
        >
          <ShowerIcon color="action" />
        </Badge>
      </div>
      <div>
        <h2>Gallon Count Per Week</h2>
        <Badge
          max={100000}
          onChange={handleChange}
          badgeContent={user.duration * 2.5 * user.frequency}
          color="primary"
        >
          <ShowerIcon color="action" />
        </Badge>
      </div>

      <div>
        <h2>Gallon Count Per Month</h2>
        <Badge
          max={100000}
          badgeContent={user.duration * 2.5 * user.frequency * 4}
          color="primary"
        >
          <ShowerIcon color="action" />
        </Badge>
      </div>
      <div>
        <h2>Gallon Count Per Year</h2>
        <Badge
          max={100000}
          badgeContent={user.duration * 2.5 * user.frequency * 4 * 12}
          color="primary"
        >
          <ShowerIcon color="action" />
        </Badge>
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
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#8884d8" />
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis stroke="#8884d8" />
          <Tooltip />
          <Legend />
          <Bar dataKey="PerShower" fill="#5554d8" />
          <Bar dataKey="Weekly" fill="green" />
          <Bar dataKey="Monthly" fill="orange" />
        </BarChart>
      </div>
    </main>
  );
}

export default InputForm;

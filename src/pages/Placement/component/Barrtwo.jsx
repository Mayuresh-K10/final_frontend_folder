import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  LabelList,
} from "recharts";
import { Box } from "@mui/material";

const data = [
  {
    
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function CustomizedLabel(props) {
  const { x, y, stroke, value } = props;

  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
}

function CustomizedAxisTick(props) {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
}

export default function Barrtwo() {
  const screenWidth = window.innerWidth;
  const isMobile = screenWidth <= 600;
  const chartWidth = isMobile ? 350 : 800;
  return (
    <Box sx={{'@media(max-width:1280px)':{overflowX:'scroll' , overflowY:'hidden'},
    '@media(max-width:780px)':{overflowX:'scroll' , overflowY:'hidden'}}}>
      <LineChart
        width={chartWidth}
        height={310}
        data={data}
        margin={{
          top: 50,
          right: 30,
          left: 5,
          bottom: 10,
        }}
      >
        <XAxis  height={60} tick={<CustomizedAxisTick />} />
        <Tooltip />  
        <Line type="monotone" dataKey="pv" stroke="#8884d8">
          <LabelList content={<CustomizedLabel />} />
        </Line>
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </Box>
  );
}

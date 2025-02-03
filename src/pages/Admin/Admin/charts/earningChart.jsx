import React, { PureComponent } from "react";

import {
  AreaChart,
  Area,
  
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 25,
  },
  {
    name: "Page B",
    uv: 60,
  },
  {
    name: "Page C",
    uv: 20,
  },
  {
    name: "Page D",
    uv: 40,
  },
  {
    name: "Page E",
    uv: 12,
  },
  {
    name: "Page F",
    uv: 50,
  },
  {
    name: "Page G",
    uv: 20,
  },
];

export default class EarningChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          
            <Tooltip />
          

          <Area
            type="monotone"
            dataKey="uv"
            stroke="rgb(93, 135, 255)"
            fill="rgb(236, 242, 255)"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

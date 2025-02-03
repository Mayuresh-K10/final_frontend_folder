import React, { PureComponent } from 'react';
import { AreaChart, Area,  Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 5,
    
  },
  {
    name: 'Page B',
    uv: 15,
    
  },
  {
    name: 'Page C',
    uv: 5,
    
  },
  {
    name: 'Page D',
    uv: 10,
    
  },
  {
    name: 'Page E',
    uv: 5,
    
  },
 
];

export default class WeeklyChart extends PureComponent {
  

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          
          
          
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="rgb(93, 135, 255)" fill="rgb(236, 242, 255)" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

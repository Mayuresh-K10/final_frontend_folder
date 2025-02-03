import React, { PureComponent } from 'react';
import { AreaChart, Area,  Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    
    uv: 30,
    
  },
  {
    
    uv: 25,
    
  },
  {
    
    uv: 35,
    
  },
  {
    
    uv: 20,
    
  },
  {
    
    uv: 30,
    
  },
  {
    
    uv: 40,
    
  },
  
];

export default class CustomerChart extends PureComponent {
  

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
          <Area type="monotone" dataKey="uv" stroke="rgb(73, 190, 255)" fill="rgb(236, 242, 255)" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

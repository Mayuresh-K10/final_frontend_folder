import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  
  XAxis,
  
  Tooltip,
  
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '16/08',
    Er: 1.5,
    Ex: -1.8,
    
  },
  {
    name: '17/08',
    Er: 2.7,
    Ex: -1.1,
    
  },
  {
    name: '18/08',
    Er: 2.2,
    Ex: -2.5,
    
  },
  {
    name: '19/08',
    Er: 3.6,
    Ex: -1.9,
    
  },
  {
    name: '20/08',
    Er: 1.5,
    Ex: -0.6,
    
  },
  {
    name: '21/08',
    Er: 1.0,
    Ex: -1.8,
    
  },
  
];

export default class RevenueChart extends PureComponent {
  

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          
          data={data}
          stackOffset="sign"
          margin={{
            top: 20,
            right: 55,
            left: 20,
            bottom: 5,
          }}

          
        >
          
          <XAxis dataKey="name" />
          
          <Tooltip />
          
          <ReferenceLine y={0.0} stroke="grey" strokeDasharray="2 2" />

          <Bar dataKey="Er" fill="rgb(93, 135, 255)" stackId="stack" barSize={20} />
          <Bar dataKey="Ex"  fill="rgb(73, 190, 255)" stackId="stack"  barSize={20}/>
          
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

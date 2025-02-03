import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  
  Tooltip,
  
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '1', uv: 4,  },
  { name: '2', uv: 10,  },
  { name: '3', uv: 9,  },
  { name: '4', uv: 7,  },
  { name: '5', uv: 9,  },
  { name: '6', uv: 10,  },
  { name: '7', uv: 11, },
  { name: '8', uv:8,  },
  { name: '9', uv:10,  },
  
];

export default class ProjectChart extends PureComponent {
  

  render() {
    return (
      <ResponsiveContainer width="130%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          
          margin={{
            top: 5,
            right: 50,
            left: 7.5,
            bottom: 5,
          }}
          
        >
          
           
          <Tooltip />
          
          
         
          
          <Bar dataKey="uv" fill="rgb(93, 135, 255)" barSize={2} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

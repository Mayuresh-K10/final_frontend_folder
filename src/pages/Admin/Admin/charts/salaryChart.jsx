import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell,  ResponsiveContainer } from 'recharts';

export default class SalaryChart extends PureComponent {
 

  state = {
    data: [
      {
        name: 'Apr',
        uv: 20,
        
      },
      {
        name: 'May',
        uv: 15,
        
      },
      {
        name: 'June',
        uv: 30,
        
      },
      {
        name: 'July',
        uv: 25,
        
      },
      {
        name: 'Aug',
        uv: 10,
        
      },
      {
        name: 'Sept',
        uv: 15,
        
      },
      
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;
    const activeItem = data[activeIndex];

    return (
      <div style={{ width: '100%' }}>
        
        <ResponsiveContainer width="100%" height={250}>
          <BarChart width={150} height={100} data={data}>
            <Bar dataKey="uv" onClick={this.handleClick}>
              {data.map((entry, index) => (
                <Cell cursor="pointer" fill={index === activeIndex ? 'rgb(93, 135, 255)' : 'rgb(229, 234, 239)'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p style={{display:"flex", justifyContent:"center"}} className="content">{`${activeItem.name}: ${activeItem.uv}`}</p>
      </div>
    );
  }
}

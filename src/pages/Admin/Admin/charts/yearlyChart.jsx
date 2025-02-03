import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Series-1', value: 38 },
  { name: 'Series-2', value: 40 },
  { name: 'Series-3', value: 25 },
  
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload,  value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  //const sx = cx + (outerRadius ) * cos;
  //const sy = cy + (outerRadius ) * sin;
  const mx = cx + (outerRadius ) * cos;
  const my = cy + (outerRadius ) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) ;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius }
        outerRadius={outerRadius }
        fill={fill}
      />
      
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 0.25} y={ey} textAnchor={textAnchor} fill="#333">{`${value}`}</text>
      
    </g>
  );
};

export default class YearlyChart extends PureComponent {
  

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="55%"
            cy="50%"
            innerRadius={35}
            outerRadius={45}
            fill="rgb(73, 190, 255)"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

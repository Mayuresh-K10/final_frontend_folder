import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AreaChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <AreaChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray='3 3' />
        {/* Use 'month' as the key for XAxis */}
        <XAxis
          dataKey='month'
          tickFormatter={(month) => {
            const [year, monthNum] = month.split("-");
            const date = new Date(year, parseInt(monthNum, 10) - 1);
            return date.toLocaleString("default", { month: "short", year: "numeric" });
          }}
        />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area type='monotone' dataKey='count' stroke='#2cb1bc' fill='#bef8fd' />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;

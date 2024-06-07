import React, { Component } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import data from './data';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class PieChartWithCustomizedLabel extends Component {
  render() {
    return (
      <ResponsiveContainer width='100%' height={300}>
        <PieChart onMouseEnter={this.onPieEnter}>
          <Pie
            dataKey='value'
            data={data}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill='#4299E1'
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default PieChartWithCustomizedLabel;

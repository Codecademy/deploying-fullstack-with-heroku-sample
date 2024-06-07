import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import data from './data';

const SimpleAreaChart = () => {
  return (
    <ResponsiveContainer width='100%' height={200}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
      >
        <XAxis dataKey='name' />
        <YAxis />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Area type='monotone' dataKey='uv' stroke='#4299E1' fill='#4299E1' />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SimpleAreaChart;

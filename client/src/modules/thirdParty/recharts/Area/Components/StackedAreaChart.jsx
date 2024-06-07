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

const StackedAreaChart = () => (
  <ResponsiveContainer width='100%' height={200}>
    <AreaChart data={data} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
      <XAxis dataKey='name' />
      <YAxis />
      <CartesianGrid strokeDasharray='3 3' />
      <Tooltip />
      <Area
        type='monotone'
        dataKey='uv'
        stackId='1'
        stroke='#4299E1'
        fill='#4299E1'
      />
      <Area
        type='monotone'
        dataKey='pv'
        stackId='1'
        stroke='#59AA2B'
        fill='#59AA2B'
      />
      <Area
        type='monotone'
        dataKey='amt'
        stackId='1'
        stroke='#F04F47'
        fill='#F04F47'
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default StackedAreaChart;

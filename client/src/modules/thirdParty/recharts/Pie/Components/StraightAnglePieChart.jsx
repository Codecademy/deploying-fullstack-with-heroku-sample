import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import data from './data';

const StraightAnglePieChart = () => (
  <ResponsiveContainer width='100%' height={300}>
    <PieChart>
      <Pie
        dataKey='value'
        startAngle={180}
        endAngle={0}
        data={data}
        outerRadius={80}
        fill='#4299E1'
        label
      />
    </PieChart>
  </ResponsiveContainer>
);

export default StraightAnglePieChart;

import React from 'react';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import data from './data';

const SimpleRadarChart = () => (
  <ResponsiveContainer width='100%' height={400}>
    <RadarChart outerRadius={150} data={data}>
      <Radar
        name='Mike'
        dataKey='A'
        stroke='#4299E1'
        fill='#4299E1'
        fillOpacity={0.6}
      />
      <PolarGrid />
      <PolarAngleAxis dataKey='subject' />
      <PolarRadiusAxis />
    </RadarChart>
  </ResponsiveContainer>
);

export default SimpleRadarChart;

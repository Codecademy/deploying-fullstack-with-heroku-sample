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
import PropTypes from 'prop-types';

const GradeGraph = ({ grades }) => {
  return (
    <ResponsiveContainer width='100%' height={220}>
      <AreaChart
        data={grades}
        margin={{ top: 50, right: 0, left: 0, bottom: 0 }}
      >
        <XAxis dataKey='month' tickLine={false} axisLine={false} />
        <Tooltip labelStyle={{ color: 'black' }} />
        <YAxis tickLine={false} axisLine={false} dataKey='grades' />
        <CartesianGrid />
        <defs>
          <linearGradient id='color15' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#EBF6FC' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#fff' stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <Area
          type='monotone'
          dataKey='grades'
          strokeWidth={4}
          stackId='2'
          stroke='#18A0FB'
          fill='url(#color15)'
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default GradeGraph;

GradeGraph.propTypes = {
  grades: PropTypes.array,
};

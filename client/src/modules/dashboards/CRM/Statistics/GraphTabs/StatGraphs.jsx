import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';
import PropTypes from 'prop-types';

const StatGraphs = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <AreaChart data={data} margin={{ top: 25, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#F04F47' stopOpacity={0.7} />
            <stop offset='95%' stopColor='#F04F47' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey='month'
          tickLine={false}
          axisLine={false}
          padding={{ left: 20, right: 20 }}
        />
        <Tooltip labelStyle={{ color: 'black' }} />
        <CartesianGrid
          strokeDasharray='2 10'
          horizontal={false}
          vertical={false}
        />
        <Area
          type='monotone'
          dataKey='number'
          stroke='#F04F47'
          strokeWidth={2}
          fillOpacity={1}
          fill='url(#colorPv)'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StatGraphs;

StatGraphs.defaultProps = {
  data: [],
};

StatGraphs.propTypes = {
  data: PropTypes.array,
};

import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

const StatGraphs = ({ data, strokeColor }) => {
  return (
    <ResponsiveContainer width='100%' height={80}>
      <AreaChart data={data} margin={{ top: 25, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor={strokeColor} stopOpacity={0.15} />
            <stop offset='95%' stopColor={strokeColor} stopOpacity={0.01} />
          </linearGradient>
        </defs>
        <Tooltip labelStyle={{ color: 'black' }} />
        <Area
          type='monotone'
          dataKey='number'
          stroke={strokeColor}
          strokeWidth={3}
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
  strokeColor: PropTypes.string,
};

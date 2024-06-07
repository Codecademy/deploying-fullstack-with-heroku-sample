import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import PropTypes from 'prop-types';

const StatGraphs = ({ id, data, strokeColor }) => {
  return (
    <ResponsiveContainer width='100%' height={60}>
      <AreaChart
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        nameKey='month'
      >
        <defs>
          <linearGradient id={'colorPv' + id} x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor={strokeColor} stopOpacity={0.15} />
            <stop offset='95%' stopColor={strokeColor} stopOpacity={0.01} />
          </linearGradient>
        </defs>
        <Tooltip
          labelStyle={{ color: 'black' }}
          contentStyle={{
            borderRadius: 12,
            borderColor: '#31354188',
            background: '#FFFFFFCA',
          }}
        />
        <Area
          type='monotone'
          dataKey='number'
          stroke={strokeColor}
          strokeWidth={2}
          fillOpacity={1}
          fill={`url(#${`colorPv` + id})`}
        />
        <XAxis dataKey='month' hide />
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
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeColor: PropTypes.string,
};

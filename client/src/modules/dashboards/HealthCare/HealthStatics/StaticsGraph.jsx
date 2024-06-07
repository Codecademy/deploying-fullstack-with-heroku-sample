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

const StaticsGraph = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={180}>
      <AreaChart data={data} margin={{ top: 25, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop
              offset='5%'
              className='statics-graph-color'
              stopOpacity={0.1}
            />
            <stop
              offset='95%'
              className='statics-graph-color'
              stopOpacity={0}
            />
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
          className='statics-graph-color'
          strokeWidth={3}
          fillOpacity={1}
          fill='url(#colorPv)'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StaticsGraph;

StaticsGraph.defaultProps = {
  data: [],
};

StaticsGraph.propTypes = {
  data: PropTypes.array,
};

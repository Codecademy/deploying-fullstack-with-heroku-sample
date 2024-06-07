import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const RevenueGrowthGraph = ({ data }) => {
  return (
    <ResponsiveContainer height={200} width='100%'>
      <AreaChart
        width={500}
        height={100}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id='colorg13' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#3182CE' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#FFF5F7' stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <Area
          type='monotone'
          dataKey='growth'
          stroke='#3182CE'
          fill='url(#colorg13)'
          strokeWidth={4}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RevenueGrowthGraph;

RevenueGrowthGraph.defaultProps = {
  data: [],
};

RevenueGrowthGraph.propTypes = {
  data: PropTypes.array,
};

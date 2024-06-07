import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import { StyledStatsGraphPara } from './index.styled';

const IncomeGraph = ({ data }) => {
  return (
    <ResponsiveContainer height={200} width='100%'>
      <AreaChart data={data}>
        <defs>
          <linearGradient id='color15' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#FFA940' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#FFF5F7' stopOpacity={0.8} />
          </linearGradient>
        </defs>

        <Area
          type='monotone'
          dataKey='revenue'
          stroke='#FFA940'
          strokeWidth={3}
          fill='url(#color15)'
          dot={{ r: 0 }}
        />
        <Tooltip
          labelStyle={{ color: 'black' }}
          cursor={false}
          content={(data) => {
            return data.payload[0] ? (
              <StyledStatsGraphPara>
                {data.payload[0].payload.revenue}
              </StyledStatsGraphPara>
            ) : null;
          }}
          wrapperStyle={{
            background: '#FFA940',
            borderRadius: 10,
            radius: 10,
            overflow: 'hidden',
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default IncomeGraph;

IncomeGraph.defaultProps = {
  data: [],
};

IncomeGraph.propTypes = {
  data: PropTypes.array,
};

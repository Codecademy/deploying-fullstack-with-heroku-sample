import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import { StyledResponsiveContainer } from './index.styled';

const VisitsGraph = ({ data }) => {
  return (
    <StyledResponsiveContainer width='100%' height={230}>
      <AreaChart data={data} margin={{ top: 50, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id='colorVisit' x1='0' y1='0' x2='0' y2='1'>
            <stop
              offset='5%'
              className='cancel-visits-graph-color'
              stopOpacity={0.1}
              stopColor='#ff0000'
            />
            <stop
              offset='95%'
              className='cancel-visits-graph-color'
              stopOpacity={0}
              stopColor='#ff0000'
            />
          </linearGradient>
        </defs>
        <Tooltip labelStyle={{ color: 'black' }} />
        <CartesianGrid
          strokeDasharray='2 10'
          horizontal={false}
          vertical={false}
        />
        <Area
          type='monotone'
          dataKey='number'
          className='cancel-visits-stroke-color'
          strokeWidth={3}
          fillOpacity={1}
          strokeColor='#ff0000'
          fill='url(#colorVisit)'
        />
      </AreaChart>
    </StyledResponsiveContainer>
  );
};

export default VisitsGraph;

VisitsGraph.defaultProps = {
  data: [],
};

VisitsGraph.propTypes = {
  data: PropTypes.array,
};

import React from 'react';
import { Line, LineChart, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import { StyledWorkViewsGraph } from './index.styled';

const WorkViewsGraph = ({ data }) => {
  return (
    <StyledWorkViewsGraph>
      <ResponsiveContainer height={100} width='100%'>
        <LineChart data={data}>
          <Line
            type='monotone'
            dataKey='value'
            stroke='#E2E8F0'
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </StyledWorkViewsGraph>
  );
};

export default WorkViewsGraph;

WorkViewsGraph.defaultProps = {
  data: [],
};

WorkViewsGraph.propTypes = {
  data: PropTypes.array,
};

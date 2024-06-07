import React from 'react';
import { Line, LineChart, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const ReviewsGraph = ({ reviewGraphData }) => {
  return (
    <ResponsiveContainer height={160} width='100%'>
      <LineChart data={reviewGraphData}>
        <Line
          type='monotone'
          dataKey='value'
          stroke='#C6F6D5'
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ReviewsGraph;

ReviewsGraph.defaultProps = {
  reviewGraphData: [],
};

ReviewsGraph.propTypes = {
  reviewGraphData: PropTypes.array,
};

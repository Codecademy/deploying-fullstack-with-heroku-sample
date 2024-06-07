import React from 'react';
import { Line, LineChart } from 'recharts';
import PropTypes from 'prop-types';
import {
  StyledMetricTitleLineGraph,
  StyledMetricTitleLineGraphRoot,
} from './index.styled';

const LineGraph = (props) => {
  const { data, graphColor } = props;

  return (
    <StyledMetricTitleLineGraph>
      <StyledMetricTitleLineGraphRoot width={300} height={40} data={data}>
        <Line
          type='monotone'
          dataKey='value'
          stroke={graphColor}
          strokeWidth={4}
          dot={false}
        />
      </StyledMetricTitleLineGraphRoot>

      <LineChart width={300} height={40} data={data}>
        <Line
          type='monotone'
          dataKey='value'
          stroke={graphColor}
          strokeWidth={4}
          dot={false}
          strokeDasharray='5 5'
        />
      </LineChart>
    </StyledMetricTitleLineGraph>
  );
};

export default LineGraph;

LineGraph.defaultProps = {
  data: [],
  graphColor: '',
};

LineGraph.propTypes = {
  data: PropTypes.array,
  graphColor: PropTypes.string,
};

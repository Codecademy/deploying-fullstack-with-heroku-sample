import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import { StyledVisitsGraphPayload } from './index.styled';

const VisitsGraph = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={220}>
      <LineChart data={data}>
        <Line
          type='monotone'
          dataKey='value'
          stroke='#4299E1'
          strokeWidth={3}
          dot={{ r: 5 }}
        />
        <Tooltip
          labelStyle={{ color: 'black' }}
          cursor={false}
          content={(data) => {
            return data.payload[0] ? (
              <StyledVisitsGraphPayload>
                {data.payload[0].payload.value}
              </StyledVisitsGraphPayload>
            ) : null;
          }}
          wrapperStyle={{
            background: '#4299E1',
            borderRadius: 10,
            radius: 10,
            overflow: 'hidden',
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default VisitsGraph;

VisitsGraph.defaultProps = {
  data: [],
};

VisitsGraph.propTypes = {
  data: PropTypes.array,
};

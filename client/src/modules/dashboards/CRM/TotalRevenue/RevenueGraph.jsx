import React from 'react';
import { Line, LineChart, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const RevenueGraph = (props) => {
  const { data } = props;

  return (
    <ResponsiveContainer width='100%' height={200}>
      <LineChart data={data} margin={{ left: 10, right: 10, bottom: 10 }}>
        <Line
          type='monotone'
          dataKey='revenue'
          stroke='#0A8FDC'
          strokeWidth={3}
          dot={{ r: 0 }}
        />
        <Line
          type='monotone'
          dataKey='revenue1'
          stroke='#49BD65'
          strokeWidth={3}
          dot={{ r: 0 }}
        />
        {/* <Tooltip
          labelStyle={{color: 'black'}}
          cursor={false}
          content={(data) => {
            return data.payload[0] ? (
              <span className='revenue-tooltip-text'>
                {data.payload[0].payload.revenue}
              </span>
            ) : null;
          }}
          wrapperStyle={{
            background: '#FFDE00',
            borderRadius: 10,
            radius: 10,
            overflow: 'hidden',
          }}
        />*/}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueGraph;

RevenueGraph.defaultProps = {
  data: [],
};

RevenueGraph.propTypes = {
  data: PropTypes.array,
};

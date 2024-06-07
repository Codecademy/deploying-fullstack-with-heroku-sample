import React from 'react';
import {
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import PropTypes from 'prop-types';

const ChartView = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={250}>
      <RadialBarChart
        cx='50%'
        cy='50%'
        innerRadius='40%'
        outerRadius='100%'
        barSize={8}
        data={data}
      >
        <RadialBar background dataKey='value' name='name' />
        <Tooltip
          contentStyle={{
            borderRadius: 12,
            borderColor: '#31354188',
            background: '#FFFFFFCA',
          }}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default ChartView;

ChartView.defaultProps = {
  data: [],
};

ChartView.propTypes = {
  data: PropTypes.array,
};

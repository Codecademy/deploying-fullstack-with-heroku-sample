import React from 'react';
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import PropTypes from 'prop-types';
import { Grid } from 'antd';
import { StyledGraphWrapper } from './index.styled';

const { useBreakpoint } = Grid;

const customizedLabel = (props) => {
  const { x, y, value } = props;
  return (
    <text
      x={x + 15}
      y={y}
      dy={-20}
      fill={value > 0 ? '#48BB78' : '#E53E3E'}
      className='social-graph-text'
      textAnchor='middle'
    >
      {value > 0 ? '+' + value : value}%
    </text>
  );
};

const SocialVisitorsGraph = ({ data }) => {
  const width = useBreakpoint();

  return (
    <StyledGraphWrapper>
      <ResponsiveContainer width='100%' height={width.xl ? 290 : 300}>
        <BarChart
          barSize={8}
          data={data}
          margin={{ top: 30, right: 0, left: 0, bottom: 20 }}
        >
          <XAxis dataKey='visitors' axisLine={false} tickLine={false} hide />
          <YAxis hide />
          <Bar dataKey='visitors'>
            <LabelList
              dataKey='change'
              content={(x, y, value) => customizedLabel(x, y, value)}
            />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </StyledGraphWrapper>
  );
};

export default SocialVisitorsGraph;

SocialVisitorsGraph.defaultProps = {
  data: [],
};

SocialVisitorsGraph.propTypes = {
  data: PropTypes.array,
};

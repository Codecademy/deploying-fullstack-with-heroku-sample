import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import PropTypes from 'prop-types';
import { StyledSocialMediaGraph } from './index.styled';

const SocialMediaGraph = ({ socialMediaData }) => {
  /*const customizedLabel = (props) => {
      const {x, y, value} = props;
      return (
        <text
          x={x + 15}
          y={y}
          dy={-20}
          className='graph-text'
          fill={value > 0 ? '#48BB78' : '#E53E3E'}
          textAnchor='middle'>
          {value > 0 ? '+' + value : value}%
        </text>
      );
    };*/

  return (
    <StyledSocialMediaGraph>
      <ResponsiveContainer width='100%' height={240}>
        <BarChart
          barSize={10}
          data={socialMediaData}
          margin={{ top: 35, right: 0, left: 0, bottom: 35 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis hide />
          <YAxis hide />
          <Bar dataKey='revenue'>
            {/*<LabelList
              dataKey='change'
              content={(x, y, value) => customizedLabel(x, y, value)}
            />*/}
            {socialMediaData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </StyledSocialMediaGraph>
  );
};

export default SocialMediaGraph;

SocialMediaGraph.defaultProps = {
  socialMediaData: [],
};

SocialMediaGraph.propTypes = {
  socialMediaData: PropTypes.array,
  x: PropTypes.number,
  y: PropTypes.number,
  value: PropTypes.string,
};

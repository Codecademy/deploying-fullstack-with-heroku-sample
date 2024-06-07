import React from 'react';
import StatGraphs from './StatGraphs';
import PropTypes from 'prop-types';
import { Button } from 'antd';
/*import {green, red} from '@ant-design/colors';*/
import {
  StyledAnaStateCard,
  StyledAnaStateContent,
  StyledAnaStateGraphs,
  StyledAnaStateHeader,
  StyledAnaStateItem,
  StyledAnaStateRow,
} from './index.styled';

/*import {LineChart, Line} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 5000,
    pv: 4000,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 4000,
    pv: 3600,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 3000,
    pv: 7000,
    amt: 2000,
  },

  {
    name: 'Page F',
    uv: 2390,
    pv: 6000,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 7000,
    amt: 2100,
  },
];

const TinyLineChart = () => {
  return (
    <>
      <LineChart width={250} height={100} data={data}>
        <Line type='monotone' dataKey='pv' stroke='#8884d8' strokeWidth={2} />
      </LineChart>
    </>
  );
};*/

const StateCard = ({ data }) => {
  return (
    <StyledAnaStateCard>
      <StyledAnaStateContent>
        <StyledAnaStateRow>
          <Button className='btn-icon'>
            <img alt='icon' src={data.icon} />
          </Button>
          <StyledAnaStateItem>
            <StyledAnaStateHeader className='text-truncate'>
              <h3>{data.value}</h3>
              <span style={{ color: '#49BD65' }}>+{data.growth}%</span>
            </StyledAnaStateHeader>
            <p>{data.type}</p>
          </StyledAnaStateItem>
        </StyledAnaStateRow>
        <StyledAnaStateGraphs>
          <StatGraphs data={data.graphData} strokeColor={data.strokeColor} />
        </StyledAnaStateGraphs>
      </StyledAnaStateContent>
    </StyledAnaStateCard>
  );
};

export default StateCard;

StateCard.defaultProps = {};

StateCard.propTypes = {
  data: PropTypes.object,
};

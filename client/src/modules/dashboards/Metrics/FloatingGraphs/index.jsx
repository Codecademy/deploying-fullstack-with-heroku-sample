import React from 'react';
import GraphFile from './GraphFile';
import PropTypes from 'prop-types';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import {
  StyledFloatingCardTitle,
  StyledFloatingGraph,
  StyledFloatingGraphArrow,
  StyledFloatingGraphCard,
  StyledFloatingGraphCardTitleGrowth,
  StyledFloatingGraphCardTitleValue,
  StyledFloatingGraphGrowthValue,
} from './index.styled';

const FloatingGraphs = ({ data, title }) => {
  return (
    <StyledFloatingGraphCard heightFull>
      <p>{title}</p>
      <StyledFloatingCardTitle>
        <StyledFloatingGraphCardTitleValue>
          {data.value}
        </StyledFloatingGraphCardTitleValue>
        {data.change > 0 ? (
          <StyledFloatingGraphCardTitleGrowth>
            <StyledFloatingGraphArrow>
              <ArrowUpOutlined />
            </StyledFloatingGraphArrow>
            <StyledFloatingGraphGrowthValue>
              {data.change}
            </StyledFloatingGraphGrowthValue>
          </StyledFloatingGraphCardTitleGrowth>
        ) : (
          <StyledFloatingGraphCardTitleGrowth className='down'>
            <StyledFloatingGraphArrow>
              <ArrowDownOutlined />
            </StyledFloatingGraphArrow>
            <StyledFloatingGraphGrowthValue>
              {data.change}
            </StyledFloatingGraphGrowthValue>
          </StyledFloatingGraphCardTitleGrowth>
        )}
      </StyledFloatingCardTitle>
      <StyledFloatingGraph>
        <GraphFile
          data={data.graphData}
          strokeColor={data.strokeColor}
          areaColor={data.areaColor}
        />
      </StyledFloatingGraph>
    </StyledFloatingGraphCard>
  );
};

export default FloatingGraphs;

FloatingGraphs.defaultProps = {
  text: '',
  data: {
    value: '',
    change: 0,
    strokeColor: '#4299E1',
    areaColor: '#90CDF4',
    graphData: [],
  },
};

FloatingGraphs.propTypes = {
  text: PropTypes.string,
  data: PropTypes.object,
  title: PropTypes.any,
};

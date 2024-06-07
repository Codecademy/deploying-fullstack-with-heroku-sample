import React from 'react';
import IncomeGraph from './IncomeGraph';
import WebTrafficGraph from './WebTrafficGraph';
import RevenueGrowthGraph from './RevenueGrowthGraph';
import PropTypes from 'prop-types';
import {
  StyledStatsCardGraph,
  StyledStatsCardwithGraph,
  StyledStatsCardwithGraphContent,
  StyledStatsGraphCard,
} from './index.styled';

const StatsCardWithGraph = ({
  data,
  text,
  bgColor,
  headingColor,
  valueColor,
  type,
}) => {
  const onGetGraph = () => {
    switch (type) {
      case 'incomeGraph':
        return <IncomeGraph data={data.graphData} />;

      case 'trafficGraph':
        return <WebTrafficGraph data={data.graphData} />;

      case 'revenueGrowth':
        return <RevenueGrowthGraph data={data.graphData} />;

      default:
        return <IncomeGraph data={data.graphData} />;
    }
  };

  return (
    <StyledStatsGraphCard style={{ backgroundColor: bgColor }} heightFull>
      <StyledStatsCardwithGraph>
        <StyledStatsCardwithGraphContent>
          <p style={{ color: headingColor }}>{text}</p>
          <h3 style={{ color: valueColor }}>{data.value}</h3>
        </StyledStatsCardwithGraphContent>
        <StyledStatsCardGraph>{onGetGraph()}</StyledStatsCardGraph>
      </StyledStatsCardwithGraph>
    </StyledStatsGraphCard>
  );
};

export default StatsCardWithGraph;

StatsCardWithGraph.defaultProps = {
  bgColor: '',
  data: {
    value: '',
    graphData: [],
  },
  type: '',
  headingColor: '',
  valueColor: '',
};

StatsCardWithGraph.propTypes = {
  text: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  data: PropTypes.object,
  type: PropTypes.string,
  headingColor: PropTypes.string,
  valueColor: PropTypes.string,
};

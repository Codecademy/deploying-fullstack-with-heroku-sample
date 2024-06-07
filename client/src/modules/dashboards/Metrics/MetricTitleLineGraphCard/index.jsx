import React from 'react';
import LineGraph from './LineGraph';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import {
  StyledMetricTitleLineGraphAction,
  StyledMetricTitleLineGraphCard,
  StyledMetricTitleLineGraphView,
} from './index.styled';

const MetricTitleLineGraphCard = ({
  title,
  titleColor,
  valueColor,
  differenceColor,
  bgColor,
  data,
  graphColor,
}) => {
  return (
    <StyledMetricTitleLineGraphCard style={{ backgroundColor: bgColor }}>
      <h3 style={{ color: titleColor }}>{title}</h3>
      <StyledMetricTitleLineGraphView>
        <h2 style={{ color: valueColor }}>{data.value}</h2>

        <LineGraph data={data.graphData} graphColor={graphColor} />
      </StyledMetricTitleLineGraphView>
      <StyledMetricTitleLineGraphAction style={{ color: differenceColor }}>
        <span>{data.difference}</span>
        <span>
          <IntlMessages id='dashboard.thisMonth' />
        </span>
        <span>{data.differencePercent}</span>
      </StyledMetricTitleLineGraphAction>
    </StyledMetricTitleLineGraphCard>
  );
};

export default MetricTitleLineGraphCard;

MetricTitleLineGraphCard.defaultProps = {
  bgColor: '',
  titleColor: '',
  valueColor: '',
  data: {
    value: '',
    difference: '',
    differencePercent: '',
    graphData: [],
  },
  differenceColor: '',
  graphColor: '',
};

MetricTitleLineGraphCard.propTypes = {
  title: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  titleColor: PropTypes.string,
  valueColor: PropTypes.string,
  data: PropTypes.object,
  differenceColor: PropTypes.string,
  graphColor: PropTypes.string,
};

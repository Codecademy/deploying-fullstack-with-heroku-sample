import React from 'react';
import ActiveUsersGraph from './ActiveUsersGraph';
import ExtraRevenueGraph from './ExtraRevenueGraph';
import TrafficRaiseGraph from './TrafficRaiseGraph';
import LessOrdersGraph from './LessOrdersGraph';
import PropTypes from 'prop-types';
import {
  StyledComparisionCard,
  StyledComparisionCardContent,
  StyledComparisionCardGraphView,
  StyledComparisionCardInfo,
} from './index.styled';

const ComparisonCard = ({
  data,
  text,
  // bgColor,
  // headingColor,
  valueColor,
  type,
}) => {
  const onGetGraph = () => {
    switch (type) {
      case 'activeUsers':
        return <ActiveUsersGraph data={data.graphData} />;

      case 'extraRevenue':
        return <ExtraRevenueGraph data={data.graphData} />;

      case 'trafficRaise':
        return <TrafficRaiseGraph data={data.graphData} />;

      case 'lessOrders':
        return <LessOrdersGraph data={data.graphData} />;

      default:
        return <ActiveUsersGraph data={data.graphData} />;
    }
  };

  return (
    <StyledComparisionCard className='no-card-space'>
      <StyledComparisionCardInfo>
        <StyledComparisionCardContent>
          <p>{text}</p>
          <h3 style={{ color: valueColor }}>{data.value}</h3>
        </StyledComparisionCardContent>
        <StyledComparisionCardGraphView>
          {onGetGraph()}
        </StyledComparisionCardGraphView>
      </StyledComparisionCardInfo>
    </StyledComparisionCard>
  );
};

export default ComparisonCard;

ComparisonCard.defaultProps = {
  data: {
    value: '',
    graphData: [],
  },
  type: '',
  valueColor: '',
};

ComparisonCard.propTypes = {
  text: PropTypes.any.isRequired,
  data: PropTypes.object,
  type: PropTypes.string,
  valueColor: PropTypes.string,
};

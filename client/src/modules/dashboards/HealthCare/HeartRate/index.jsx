import React from 'react';
import AppCard from '@crema/components/AppCard';
import ViewGraph from './ViewGraph';
import PropTypes from 'prop-types';
import {
  StyledHeartGraphItem,
  StyledHeartGraphView,
  StyledHeartRate,
  StyledUnitTitle,
} from './index.styled';

const HeartRate = ({ data }) => {
  return (
    <AppCard
      heightFull
      style={{
        overflow: 'hidden',
        backgroundColor: data.color,
        color: 'white',
      }}
    >
      <StyledHeartRate>
        <h3>{data.title}</h3>
        <StyledHeartGraphView>
          <StyledHeartGraphItem>
            <ViewGraph data={data.graphData} />
          </StyledHeartGraphItem>
        </StyledHeartGraphView>
        <StyledUnitTitle>
          {data.measurement}
          <span>{data.unit}</span>
        </StyledUnitTitle>
      </StyledHeartRate>
    </AppCard>
  );
};

export default HeartRate;

HeartRate.defaultProps = {
  data: {},
};

HeartRate.propTypes = {
  data: PropTypes.object,
};

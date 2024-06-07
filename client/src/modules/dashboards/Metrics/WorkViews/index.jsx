import React from 'react';
import WorkViewsGraph from './WorkViewsGraph';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import { StyledWorkViewCard } from './index.styled';

const WorkViews = ({ data }) => {
  return (
    <StyledWorkViewCard heightFull>
      <h3>{data.views}</h3>
      <p>
        <IntlMessages id='dashboard.workViews' />
      </p>

      <WorkViewsGraph data={data.graphData} />
    </StyledWorkViewCard>
  );
};

export default WorkViews;

WorkViews.defaultProps = {
  data: {
    views: '',
    graphData: [],
  },
};

WorkViews.propTypes = {
  data: PropTypes.object,
};

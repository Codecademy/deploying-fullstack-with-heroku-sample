import React from 'react';
import ProfileViewsGraph from './ProfileViewsGraph';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import { StyledProfileViewCard, StyledProfileViewGraph } from './index.styled';

const ProfileViews = ({ data }) => {
  return (
    <StyledProfileViewCard heightFull>
      <h3>{data.views}</h3>
      <p>
        <IntlMessages id='dashboard.profileViews' />
      </p>
      <StyledProfileViewGraph>
        <ProfileViewsGraph data={data.graphData} />
      </StyledProfileViewGraph>
    </StyledProfileViewCard>
  );
};

export default ProfileViews;

ProfileViews.defaultProps = {
  data: {
    views: '',
    graphData: [],
  },
};

ProfileViews.propTypes = {
  data: PropTypes.object,
};

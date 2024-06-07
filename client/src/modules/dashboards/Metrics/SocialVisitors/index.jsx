import React from 'react';
import SocialVisitorsGraph from './SocialVisitorsGraph';
import PropTypes from 'prop-types';
import Categories from './Categories';
import { useIntl } from 'react-intl';
import { StyledSocialVisitorCard } from './index.styled';

const SocialVisitors = ({ data }) => {
  const { messages } = useIntl();
  return (
    <StyledSocialVisitorCard
      heightFull
      title={messages['dashboard.socialVisitors']}
      extra={<a>{messages['common.viewAll']}</a>}
    >
      <SocialVisitorsGraph data={data} />

      <Categories data={data} />
    </StyledSocialVisitorCard>
  );
};

export default SocialVisitors;

SocialVisitors.defaultProps = {
  data: [],
};

SocialVisitors.propTypes = {
  data: PropTypes.array,
};

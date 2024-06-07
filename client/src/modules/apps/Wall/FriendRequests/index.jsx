import React from 'react';
import AppList from '@crema/components/AppList';
import RequestItem from './RequestItem';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { StyledRequestCard } from './index.styled';

const FriendRequests = ({ friendRequests }) => {
  const { messages } = useIntl();
  return (
    <StyledRequestCard
      className='no-card-space-ltr-rtl'
      title={`Friends`}
      extra={<a href='#/'>{messages['common.viewAll']}</a>}
    >
      <AppList
        animation='transition.slideRightBigIn'
        data={friendRequests}
        renderItem={(data, index) => <RequestItem key={index} request={data} />}
      />
    </StyledRequestCard>
  );
};

export default FriendRequests;

FriendRequests.propTypes = {
  friendRequests: PropTypes.array,
};

import React from 'react';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { List } from 'antd';
import {
  StyledNotificationContent,
  StyledNotificationItem,
  StyledNotificationThumb,
} from './index.styled';

const NotificationItem = ({ notification }) => {
  return (
    <StyledNotificationItem className='item-hover'>
      <StyledNotificationThumb
        style={{
          backgroundColor: notification.bgcolor,
          color: notification.color,
        }}
      >
        {notification.letter}
      </StyledNotificationThumb>
      <StyledNotificationContent>
        <h3>{notification.content}</h3>
        <p className='text-truncate'>{notification.date}</p>
      </StyledNotificationContent>
    </StyledNotificationItem>
  );
};

const Notifications = ({ notifications }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      heightFull
      title={messages['academy.notifications']}
    >
      <List
        dataSource={notifications}
        renderItem={(data, index) => (
          <NotificationItem key={index} notification={data} />
        )}
      />
    </AppCard>
  );
};

export default Notifications;

Notifications.propTypes = {
  notifications: PropTypes.array,
};

NotificationItem.propTypes = {
  notification: PropTypes.object,
};

import React from 'react';
import { useIntl } from 'react-intl';
import AppMenu from '@crema/components/AppMenu';
import NotificationCell from './NotificationCell';
import PropTypes from 'prop-types';
import { List } from 'antd';
import {
  StyledHcNotificationCard,
  StyledNotificationScroll,
} from './index.styled';

const Notifications = ({ data }) => {
  const { messages } = useIntl();
  return (
    <StyledHcNotificationCard
      className='no-card-space-ltr-rtl'
      title={messages['healthCare.notification']}
      extra={<AppMenu />}
    >
      <StyledNotificationScroll>
        <List
          dataSource={data}
          renderItem={(notification) => (
            <NotificationCell
              key={notification.id}
              notification={notification}
            />
          )}
        />
      </StyledNotificationScroll>
    </StyledHcNotificationCard>
  );
};

export default Notifications;

Notifications.defaultProps = {
  data: [],
};

Notifications.propTypes = {
  data: PropTypes.array,
};

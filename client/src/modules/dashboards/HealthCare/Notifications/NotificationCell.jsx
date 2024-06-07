import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledHcNotificationCell,
  StyledNotificationContent,
} from './index.styled';

const NotificationCell = ({ notification }) => {
  return (
    <StyledHcNotificationCell className='item-hover'>
      <span
        className='dot'
        style={{
          backgroundColor: notification.color,
        }}
      />
      <StyledNotificationContent>
        <h5>{notification.title}</h5>
        <p>{notification.time}</p>
      </StyledNotificationContent>
    </StyledHcNotificationCell>
  );
};

export default NotificationCell;

NotificationCell.propTypes = {
  notification: PropTypes.object.isRequired,
};

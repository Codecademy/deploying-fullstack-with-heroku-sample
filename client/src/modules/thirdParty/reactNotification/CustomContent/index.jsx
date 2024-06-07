import React from 'react';
import { Store } from 'react-notifications-component';
import { Button } from 'antd';

import notification from '../helpers/notification';
import { getContainer } from '../helpers/randomize';
import {
  StyledNotificationCustom,
  StyledNotificationCustomContent,
  StyledNotificationCustomIcon,
  StyledNotificationCustomImage,
  StyledNotificationCustomImageContent,
  StyledReactNotification,
  StyledReactNotificationItem,
} from '../index.styled';

export default class CustomContentExample extends React.Component {
  addCustomIcon = (type, iconClassName) => {
    let message =
      'Your agenda has been successfully synced with your Google Calendar.';
    if (type === 'success') {
      message = 'Your agenda has been successfully synced';
    } else if (type === 'warning') {
      message = 'Warning! All your db will be lost if you proceed';
    } else if (type === 'danger') {
      message = 'Error! You have no update rights';
    }

    Store.addNotification(
      Object.assign({}, notification, {
        width: 275,
        container: getContainer(),
        content: (
          <StyledNotificationCustom className={`notification-custom-${type}`}>
            <StyledNotificationCustomIcon className='notification-custom-icon'>
              <i className={iconClassName} />
            </StyledNotificationCustomIcon>
            <StyledNotificationCustomContent>
              <p>{message}</p>
            </StyledNotificationCustomContent>
          </StyledNotificationCustom>
        ),
      }),
    );
  };

  add = () => {
    Store.addNotification(
      Object.assign({}, notification, {
        width: 325,
        container: getContainer(),
        content: (
          <StyledNotificationCustomImage>
            <img src='/assets/images/logo.png' alt='' />
            <StyledNotificationCustomImageContent>
              Crema Admin
            </StyledNotificationCustomImageContent>
          </StyledNotificationCustomImage>
        ),
      }),
    );
  };

  render() {
    return (
      <StyledReactNotification>
        <StyledReactNotificationItem>
          <Button type='primary' onClick={this.add}>
            Custom Image Content
          </Button>
        </StyledReactNotificationItem>
        <StyledReactNotificationItem>
          <Button
            type='primary'
            onClick={() => this.addCustomIcon('success', 'fas fa-check-circle')}
          >
            Success with Icon
          </Button>
        </StyledReactNotificationItem>
        <StyledReactNotificationItem>
          <Button
            type='primary'
            onClick={() =>
              this.addCustomIcon('danger', 'fas fa-exclamation-circle')
            }
          >
            Danger with Icon
          </Button>
        </StyledReactNotificationItem>
        <StyledReactNotificationItem>
          <Button
            type='primary'
            onClick={() =>
              this.addCustomIcon('warning', 'fas fa-exclamation-triangle')
            }
          >
            Warning with Icon
          </Button>
        </StyledReactNotificationItem>
      </StyledReactNotification>
    );
  }
}

import React from 'react';
import { Store } from 'react-notifications-component';
import { Button } from 'antd';

import notification from '../helpers/notification';
import { getContainer, getMessage, getTitle } from '../helpers/randomize';
import {
  StyledReactNotification,
  StyledReactNotificationItem,
} from '../index.styled';

export default class TypeExample extends React.Component {
  add = (type) => {
    return Store.addNotification(
      Object.assign({}, notification, {
        type,
        title: getTitle(type),
        message: getMessage(type),
        container: getContainer(),
      }),
    );
  };

  render() {
    return (
      <StyledReactNotification>
        <StyledReactNotificationItem>
          <Button type='primary' onClick={() => this.add('success')}>
            Success
          </Button>
        </StyledReactNotificationItem>
        <StyledReactNotificationItem>
          <Button type='primary' onClick={() => this.add('default')}>
            Default
          </Button>
        </StyledReactNotificationItem>
        <StyledReactNotificationItem>
          <Button type='primary' onClick={() => this.add('warning')}>
            Warning
          </Button>
        </StyledReactNotificationItem>
        <StyledReactNotificationItem>
          <Button type='primary' onClick={() => this.add('info')}>
            Info
          </Button>
        </StyledReactNotificationItem>
        <StyledReactNotificationItem>
          <Button type='primary' onClick={() => this.add('danger')}>
            Danger
          </Button>
        </StyledReactNotificationItem>
        <StyledReactNotificationItem>
          <Button type='primary' onClick={() => this.add('awesome')}>
            Custom
          </Button>
        </StyledReactNotificationItem>
      </StyledReactNotification>
    );
  }
}

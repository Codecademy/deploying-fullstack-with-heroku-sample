import React from 'react';
import { Store } from 'react-notifications-component';
import { Button } from 'antd';
import {
  StyledReactNotification,
  StyledReactNotificationItem,
} from '../index.styled';

import notification from '../helpers/notification';
import { getMessage, getTitle, getType } from '../helpers/randomize';

export default class ContainerExample extends React.Component {
  add = (container) => {
    const type = getType();

    return Store.addNotification(
      Object.assign({}, notification, {
        title: getTitle(type),
        message: getMessage(type),
        container,
        type,
      }),
    );
  };

  render() {
    return (
      <StyledReactNotification>
        <StyledReactNotificationItem>
          <Button type='primary' onClick={() => this.add('top-left')}>
            Top Left
          </Button>
        </StyledReactNotificationItem>
        <StyledReactNotificationItem>
          <Button type='primary' onClick={() => this.add('top-right')}>
            Top Right
          </Button>
        </StyledReactNotificationItem>
        <StyledReactNotificationItem>
          <Button type='primary' onClick={() => this.add('top-center')}>
            Top Center
          </Button>
        </StyledReactNotificationItem>
        <StyledReactNotificationItem>
          <Button type='primary' onClick={() => this.add('bottom-left')}>
            Bottom Left
          </Button>
        </StyledReactNotificationItem>
        <StyledReactNotificationItem>
          <Button type='primary' onClick={() => this.add('bottom-right')}>
            Bottom Right
          </Button>
        </StyledReactNotificationItem>
        <StyledReactNotificationItem>
          <Button type='primary' onClick={() => this.add('bottom-center')}>
            Bottom Center
          </Button>
        </StyledReactNotificationItem>
      </StyledReactNotification>
    );
  }
}

import React from 'react';
import { Store } from 'react-notifications-component';
import { Button } from 'antd';
import { getContainer, getMessage, getType } from '../helpers/randomize';
import notification from '../helpers/notification';
import {
  StyledReactNotification,
  StyledReactNotificationItem,
} from '../index.styled';

const AnimationEntrance = () => {
  const add = (htmlClasses) => {
    const type = getType();
    return Store.addNotification(
      Object.assign({}, notification, {
        animationIn: htmlClasses,
        container: getContainer(),
        message: getMessage(type),
        type,
      }),
    );
  };

  return (
    <StyledReactNotification>
      <StyledReactNotificationItem>
        <Button type='primary' onClick={() => add(['animated bounceIn'])}>
          Bounce In
        </Button>
      </StyledReactNotificationItem>
      <StyledReactNotificationItem>
        <Button type='primary' onClick={() => add(['animated fadeIn'])}>
          Fade In
        </Button>
      </StyledReactNotificationItem>
      <StyledReactNotificationItem>
        <Button type='primary' onClick={() => add(['animated flipInX'])}>
          Flip In X
        </Button>
      </StyledReactNotificationItem>
      <StyledReactNotificationItem>
        <Button type='primary' onClick={() => add(['animated flipInY'])}>
          Flip In Y
        </Button>
      </StyledReactNotificationItem>
      <StyledReactNotificationItem>
        <Button type='primary' onClick={() => add(['animated zoomIn'])}>
          Zoom In
        </Button>
      </StyledReactNotificationItem>
      <StyledReactNotificationItem>
        <Button type='primary' onClick={() => add(['animated flash'])}>
          Flash
        </Button>
      </StyledReactNotificationItem>
      <StyledReactNotificationItem>
        <Button type='primary' onClick={() => add(['animated jackInTheBox'])}>
          Jack In The Box
        </Button>
      </StyledReactNotificationItem>
    </StyledReactNotification>
  );
};
export default AnimationEntrance;

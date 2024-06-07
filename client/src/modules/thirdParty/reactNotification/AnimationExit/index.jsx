import React from 'react';
import { Store } from 'react-notifications-component';
import { Button } from 'antd';

import { getContainer, getMessage, getType } from '../helpers/randomize';
import notification from '../helpers/notification';
import {
  StyledReactNotification,
  StyledReactNotificationItem,
} from '../index.styled';

const AnimationExit = () => {
  const add = (htmlClasses) => {
    const type = getType();
    return Store.addNotification(
      Object.assign({}, notification, {
        slidingExit: { delay: 300 },
        animationOut: htmlClasses,
        container: getContainer(),
        message: getMessage(type),
        type,
      }),
    );
  };

  return (
    <StyledReactNotification>
      <StyledReactNotificationItem>
        <Button type='primary' onClick={() => add(['animated bounceOut'])}>
          Bounce Out
        </Button>
      </StyledReactNotificationItem>
      <StyledReactNotificationItem>
        <Button type='primary' onClick={() => add(['animated fadeOut'])}>
          Fade Out
        </Button>
      </StyledReactNotificationItem>
      <StyledReactNotificationItem>
        <Button type='primary' onClick={() => add(['animated flipOutX'])}>
          Flip Out X
        </Button>
      </StyledReactNotificationItem>
      <StyledReactNotificationItem>
        <Button type='primary' onClick={() => add(['animated flipOutY'])}>
          Flip Out Y
        </Button>
      </StyledReactNotificationItem>
      <StyledReactNotificationItem>
        <Button type='primary' onClick={() => add(['animated zoomOut'])}>
          Zoom Out
        </Button>
      </StyledReactNotificationItem>
    </StyledReactNotification>
  );
};
export default AnimationExit;

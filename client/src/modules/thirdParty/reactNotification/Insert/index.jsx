import React from 'react';
import { Store } from 'react-notifications-component';
import notification from '../helpers/notification';
import { getMessage, getTitle, getType } from '../helpers/randomize';
import { StyledNotificationInsetBtn } from '../index.styled';

const InsertExample = () => {
  const add = (insert) => {
    const type = getType();
    return Store.addNotification(
      Object.assign({}, notification, {
        type,
        insert,
        message: getMessage(type),
        title: getTitle(type),
      }),
    );
  };

  return (
    <div>
      <StyledNotificationInsetBtn type='primary' onClick={() => add('top')}>
        Top
      </StyledNotificationInsetBtn>
      <StyledNotificationInsetBtn type='primary' onClick={() => add('bottom')}>
        Bottom
      </StyledNotificationInsetBtn>
    </div>
  );
};
export default InsertExample;

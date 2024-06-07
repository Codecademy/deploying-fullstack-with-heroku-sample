import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import { MessageOutlined } from '@ant-design/icons';
import { StyledNoUserScreen } from '../index.styled';

const NoUserScreen = () => {
  return (
    <StyledNoUserScreen>
      <MessageOutlined className='message-icon' />
      <p className='mb-0'>
        <IntlMessages id='chatApp.noUser' />
      </p>
    </StyledNoUserScreen>
  );
};

export default NoUserScreen;

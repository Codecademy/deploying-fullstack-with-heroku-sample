import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import { StyledSendMessage, StyledSendMessageTitle } from './index.styled';

const SendMessage = ({ sendMessage }) => {
  return (
    <StyledSendMessage>
      <StyledSendMessageTitle>
        <IntlMessages id='extraPages.sendUsMessage' />
      </StyledSendMessageTitle>
      <p>{sendMessage.description}</p>
    </StyledSendMessage>
  );
};

export default SendMessage;

SendMessage.propTypes = {
  sendMessage: PropTypes.object,
};

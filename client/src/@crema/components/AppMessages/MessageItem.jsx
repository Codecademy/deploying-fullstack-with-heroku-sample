import React from 'react';

import PropTypes from 'prop-types';
import {
  StyledMsgAvatar,
  StyledMsgListItem,
  StyledMsgListItemContent,
} from './MessageItem.styled';

const MessageItem = (props) => {
  const { item } = props;

  return (
    <StyledMsgListItem className='item-hover'>
      <StyledMsgAvatar src={item.image} />
      <StyledMsgListItemContent>
        <h3>{item.name}</h3>
        <p>{item.message}</p>
      </StyledMsgListItemContent>
    </StyledMsgListItem>
  );
};

export default MessageItem;

MessageItem.propTypes = {
  item: PropTypes.object.isRequired,
};

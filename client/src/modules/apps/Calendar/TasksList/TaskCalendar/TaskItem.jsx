import React from 'react';
import PropTypes from 'prop-types';
import { MdComment, MdOutlineAttachment } from 'react-icons/md';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import {
  StyledCommentWrapper,
  StyledIconWrapper,
  StyledTaskItemContainer,
  StyledTaskItemWrapper,
  StyledTitle,
} from './Calendar.style';

const TaskItem = ({ item }) => {
  return (
    <StyledTaskItemWrapper
      style={{
        backgroundColor: item?.priority?.color + 'AA',
      }}
    >
      <StyledTaskItemContainer
        style={{
          backgroundColor: item?.priority?.color,
        }}
      >
        <StyledTitle>{item.title}</StyledTitle>
      </StyledTaskItemContainer>
      <div style={{ display: 'flex', padding: 4 }}>
        {item.hasAttachments ? (
          <StyledIconWrapper>
            <MdOutlineAttachment size={20} />
          </StyledIconWrapper>
        ) : null}
        <StyledIconWrapper>
          {item.hasAttachments ? (
            <StarFilled style={{ fontSize: 14 }} />
          ) : (
            <StarOutlined style={{ fontSize: 14 }} />
          )}
        </StyledIconWrapper>
        <StyledIconWrapper>
          <MdComment size={20} />
          <StyledCommentWrapper>{item.comments.length}</StyledCommentWrapper>
        </StyledIconWrapper>
        <Avatar.Group maxCount={3}>
          <Avatar
            alt={item?.createdBy?.name}
            src={item?.assignedTo?.image}
            size={24}
          />
          <Avatar
            alt={item?.createdBy?.name}
            src={item?.createdBy?.image}
            size={24}
          />
        </Avatar.Group>
      </div>
    </StyledTaskItemWrapper>
  );
};

export default TaskItem;
TaskItem.propTypes = {
  item: PropTypes.object,
};

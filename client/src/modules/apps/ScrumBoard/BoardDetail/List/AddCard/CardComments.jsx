import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';
import { FiSend } from 'react-icons/fi';
import clsx from 'clsx';
import IntlMessages from '@crema/helpers/IntlMessages';
import {
  StyledCardCommentArea,
  StyledCardCommentFooter,
  StyledCommentAvatar,
  StyledCommentCellWrapper,
  StyledCommentItemContent,
  StyledCommentItemDate,
  StyledScrumBoardCardComment,
  StyledScrumBoardCommentScroll,
  StyledScrumCardCommentTitle,
  StyledScrumCardCommentView,
} from './index.styled';

const CardComments = (props) => {
  const { comments, onAddNewComment } = props;
  const [comment, setComment] = useState('');

  const onAddComment = () => {
    onAddNewComment(comment);
    setComment('');
  };

  const { messages } = useIntl();

  const { TextArea } = Input;

  const getCommentCell = (item, index, isPreviousSender) => {
    return (
      <StyledCommentCellWrapper
        className={clsx({
          'scrum-board-card-comment-item-previous': isPreviousSender,
        })}
        key={index}
      >
        {item.sender.image ? (
          <StyledCommentAvatar
            src={item.sender.image}
            className='scrum-board-card-comment-item-user-avatar'
          />
        ) : (
          <StyledCommentAvatar className='scrum-board-card-comment-item-user-avatar'>
            {item.sender.name.charAt(0).toUpperCase()}
          </StyledCommentAvatar>
        )}
        <StyledCommentItemContent className='scrum-board-card-comment-item-user-content'>
          <StyledCommentItemDate className='scrum-board-card-comment-item-user-date'>
            {item.date}
          </StyledCommentItemDate>
          <StyledCardCommentArea>
            <p>{item.comment}</p>
          </StyledCardCommentArea>
        </StyledCommentItemContent>
      </StyledCommentCellWrapper>
    );
  };

  return (
    <StyledScrumCardCommentView>
      <StyledScrumCardCommentTitle>
        <IntlMessages id='common.comments' />
      </StyledScrumCardCommentTitle>
      <StyledScrumBoardCommentScroll>
        {comments && comments.length > 0 ? (
          <StyledScrumBoardCardComment>
            {comments.map((item, index) =>
              getCommentCell(
                item,
                index,
                index > 0 && comments[index - 1].sender.id === item.sender.id,
              ),
            )}
          </StyledScrumBoardCardComment>
        ) : null}
      </StyledScrumBoardCommentScroll>

      <StyledCardCommentFooter>
        <TextArea
          autoSize={{ minRows: 2, maxRows: 3 }}
          // onKeyDown={onAddComment}
          value={comment}
          placeholder={messages['common.pressEnter']}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          shape='circle'
          type='primary'
          disabled={!comment}
          onClick={onAddComment}
        >
          <FiSend />
        </Button>
      </StyledCardCommentFooter>
    </StyledScrumCardCommentView>
  );
};

export default CardComments;

CardComments.defaultProps = {
  comments: [],
};

CardComments.propTypes = {
  comments: PropTypes.array,
  onAddNewComment: PropTypes.func,
};

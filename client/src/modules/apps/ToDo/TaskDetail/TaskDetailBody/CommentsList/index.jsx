import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import AppList from '@crema/components/AppList';
import CommentsListItem from './CommentsListItem';
import {
  StyledTodoComment,
  StyledTodoCommentArea,
  StyledTodoCommentBody,
  StyledTodoCommentScroll,
  StyledTodoCommentTitle,
} from '../../index.styled';

const CommentsList = ({ comments }) => {
  return (
    <>
      {comments.length > 0 ? (
        <StyledTodoComment>
          <StyledTodoCommentTitle>
            <IntlMessages id='common.comments' />
          </StyledTodoCommentTitle>
          <StyledTodoCommentBody>
            <StyledTodoCommentScroll>
              <StyledTodoCommentArea>
                <AppList
                  data={comments}
                  renderItem={(item, index) => (
                    <CommentsListItem
                      item={item}
                      key={index}
                      isPreviousSender={
                        index > 0 &&
                        comments.sender === comments[index - 1].sender
                      }
                      isLast={
                        (index + 1 < comments.length &&
                          comments.sender !== comments[index + 1].sender) ||
                        index + 1 === comments.length
                      }
                    />
                  )}
                />
              </StyledTodoCommentArea>
            </StyledTodoCommentScroll>
          </StyledTodoCommentBody>
        </StyledTodoComment>
      ) : null}
    </>
  );
};

export default CommentsList;

CommentsList.defaultProps = {
  comments: [],
};

CommentsList.propTypes = {
  comments: PropTypes.array,
};

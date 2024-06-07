import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import {
  StyledItemBy,
  StyledReviewBy,
  StyledReviewItem,
  StyledReviewItemHeader,
} from './index.styled';

const ReviewItem = ({ item }) => {
  return (
    <StyledReviewItem className='item-hover' key={item.id}>
      <StyledReviewItemHeader>
        <Rate value={item.rating} />
        <StyledReviewBy>{item.time}</StyledReviewBy>
      </StyledReviewItemHeader>
      <p>{item.content}</p>
      <StyledItemBy>- {item.by}</StyledItemBy>
    </StyledReviewItem>
  );
};

export default ReviewItem;

ReviewItem.propTypes = {
  item: PropTypes.object.isRequired,
};

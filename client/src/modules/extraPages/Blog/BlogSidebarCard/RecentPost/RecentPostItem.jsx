import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledFlex,
  StyledSecondaryText,
  StyledTitle4,
  StyledWrapper,
} from './index.styled';

const RecentPostItem = ({ recentPost }) => {
  return (
    <StyledFlex>
      <StyledWrapper>
        <img src={recentPost.srcImg} alt='Recent Post' />
      </StyledWrapper>
      <div style={{ flex: 1 }}>
        <StyledTitle4>{recentPost.title}</StyledTitle4>
        <StyledSecondaryText>{recentPost.duration}</StyledSecondaryText>
      </div>
    </StyledFlex>
  );
};

export default RecentPostItem;

RecentPostItem.propTypes = {
  recentPost: PropTypes.object,
};

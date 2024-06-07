import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledFlex,
  StyledImgWrapper,
  StyledSecText,
  StyledTitle,
} from './index.styled';

const StoriesItem = ({ stories }) => {
  return (
    <StyledFlex>
      <StyledImgWrapper>
        <img src={stories.srcImg} alt='stories' />
      </StyledImgWrapper>
      <div>
        <StyledTitle level={3}>{stories.title}</StyledTitle>
        <StyledSecText>
          <span style={{ marginRight: 4 }}>{stories.tag}</span>
          <span style={{ marginRight: 4 }}>.</span>
          <span>{stories.time}</span>
        </StyledSecText>
      </div>
    </StyledFlex>
  );
};

export default StoriesItem;

StoriesItem.propTypes = {
  stories: PropTypes.object,
};

import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledHeading,
  StyledHeadingWrapper,
  StyledSlick3Wrapper,
  StyledSlide3ItemWrapper,
} from './index.styled';

const SlideItem = ({ slide }) => {
  return (
    <StyledSlide3ItemWrapper>
      <StyledSlick3Wrapper>
        <img src={slide.srcImg} alt={slide.title} />
      </StyledSlick3Wrapper>
      <StyledHeadingWrapper>
        <StyledHeading level={5}>{slide.title}</StyledHeading>
      </StyledHeadingWrapper>
    </StyledSlide3ItemWrapper>
  );
};

export default SlideItem;

SlideItem.propTypes = {
  slide: PropTypes.object,
};

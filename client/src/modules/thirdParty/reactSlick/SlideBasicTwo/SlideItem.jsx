import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledHeading,
  StyledSlick2Wrapper,
  StyledSlide2ImgWrapper,
  StyledSlide2Item,
} from './index.styled';
import { StyledSlideTitleWrapper } from '../SlideBasicFive/index.styled';
import { Typography } from 'antd';

const SlideItem = ({ slide }) => {
  return (
    <StyledSlide2Item>
      <StyledSlick2Wrapper>
        <StyledSlide2ImgWrapper>
          <img src={slide.srcImg} alt={slide.title} />
        </StyledSlide2ImgWrapper>
      </StyledSlick2Wrapper>
      <StyledSlideTitleWrapper>
        <StyledHeading level={5}>{slide.title}</StyledHeading>
        <Typography.Text>{slide.description}</Typography.Text>
      </StyledSlideTitleWrapper>
    </StyledSlide2Item>
  );
};

export default SlideItem;

SlideItem.propTypes = {
  slide: PropTypes.object,
};

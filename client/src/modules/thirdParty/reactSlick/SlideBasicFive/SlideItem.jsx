import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledSlide5Img,
  StyledSlide5ItemWrapper,
  StyledSlidePos,
  StyledSlidePosSpace,
  StyledSlideThumbnailWrapper,
  StyledSlideTitleWrapper,
} from './index.styled';
import { Typography } from 'antd';
import { StyledHeading } from '../SlideBasicTwo/index.styled';

const SlideItem = ({ slide }) => {
  return (
    <StyledSlidePos>
      <StyledSlidePosSpace>
        <StyledSlide5ItemWrapper>
          <StyledSlide5Img>
            <img src={slide.srcImg} alt={slide.title} />
          </StyledSlide5Img>
        </StyledSlide5ItemWrapper>

        <StyledSlideThumbnailWrapper>
          <img src={slide.srcThumb} alt={slide.title} />
        </StyledSlideThumbnailWrapper>
      </StyledSlidePosSpace>
      <StyledSlideTitleWrapper>
        <StyledHeading level={5}>{slide.title}</StyledHeading>
        <Typography.Paragraph style={{ margin: 0 }}>
          {slide.description}
        </Typography.Paragraph>
      </StyledSlideTitleWrapper>
    </StyledSlidePos>
  );
};

export default SlideItem;

SlideItem.propTypes = {
  slide: PropTypes.object,
};

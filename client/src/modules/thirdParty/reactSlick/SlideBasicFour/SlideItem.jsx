import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledAvatarWrapper,
  StyledHeading,
  StyledHeadingSmall,
  StyledHeadingWrapper,
  StyledSecData,
  StyledSlide4ImgWrapper,
  StyledSlide4ItemContainer,
  StyledSlide4ItemWrapper,
} from './index.styled';
import { Avatar, Typography } from 'antd';

const SlideItem = ({ slide }) => {
  return (
    <StyledSlide4ItemWrapper>
      <StyledSlide4ItemContainer>
        <StyledSlide4ImgWrapper>
          <img src={slide.srcImg} alt='Art' />
        </StyledSlide4ImgWrapper>
      </StyledSlide4ItemContainer>
      <StyledHeadingWrapper>
        <StyledHeading level={5}>{slide.title}</StyledHeading>
        <StyledAvatarWrapper>
          <div style={{ marginRight: '14px' }}>
            <Avatar src={slide.avatar} alt={slide.avatarName} size={40} />
          </div>
          <div style={{ flex: 1 }}>
            <StyledHeadingSmall level={5}>
              {slide.avatarName}
            </StyledHeadingSmall>
            <StyledSecData>{slide.data}</StyledSecData>
          </div>
        </StyledAvatarWrapper>
        <Typography>{slide.description}</Typography>
      </StyledHeadingWrapper>
    </StyledSlide4ItemWrapper>
  );
};

export default SlideItem;

SlideItem.propTypes = {
  slide: PropTypes.object,
};

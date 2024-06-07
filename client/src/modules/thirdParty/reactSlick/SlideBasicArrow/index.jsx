import React from 'react';
import AppCard from '@crema/components/AppCard';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import MediaSlider from './MediaSlider';
import { StyledSlickBasicContainer, StyledSlickWrapper } from '../index.styled';

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SlideBasicArrow = ({ slideBasicArrow }) => {
  return (
    <AppCard>
      <MediaSlider>
        <Slider {...settings}>
          {slideBasicArrow.map((slide, index) => (
            <StyledSlickBasicContainer key={index}>
              <StyledSlickWrapper>
                <img src={slide.srcImg} alt={slide.title} />
              </StyledSlickWrapper>
            </StyledSlickBasicContainer>
          ))}
        </Slider>
      </MediaSlider>
    </AppCard>
  );
};

export default SlideBasicArrow;

SlideBasicArrow.propTypes = {
  slideBasicArrow: PropTypes.array,
};

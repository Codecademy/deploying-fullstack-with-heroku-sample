import React from 'react';
import AppCard from '@crema/components/AppCard';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import SlideItem from './SlideItem';
import MediaSlider from './MediaSlider';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SlideBasicTwo = ({ slideBasicTwo }) => {
  return (
    <AppCard>
      <MediaSlider>
        <Slider {...settings}>
          {slideBasicTwo.map((slide, index) => (
            <SlideItem key={index} slide={slide} />
          ))}
        </Slider>
      </MediaSlider>
    </AppCard>
  );
};

export default SlideBasicTwo;

SlideBasicTwo.propTypes = {
  slideBasicTwo: PropTypes.array,
};

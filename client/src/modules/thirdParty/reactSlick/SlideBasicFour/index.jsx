import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import Slider from 'react-slick';
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

const SlideBasicFour = ({ slideBasicFour }) => {
  return (
    <AppCard>
      <MediaSlider>
        <Slider {...settings}>
          {slideBasicFour.map((slide, index) => (
            <div key={index}>
              <SlideItem slide={slide} />
            </div>
          ))}
        </Slider>
      </MediaSlider>
    </AppCard>
  );
};

export default SlideBasicFour;

SlideBasicFour.propTypes = {
  slideBasicFour: PropTypes.array,
};

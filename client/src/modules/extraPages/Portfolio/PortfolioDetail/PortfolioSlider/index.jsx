import React from 'react';
import MediaSlider from './MediaSlider';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

const settings = {
  infinite: true,
  speed: 500,
  dots: false,
  centerMode: true,
  centerPadding: '160px',
  slidesToShow: 1,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1536,
      settings: {
        centerMode: true,
        centerPadding: '160px',
      },
    },
    {
      breakpoint: 1200,
      settings: {
        centerMode: true,
        centerPadding: '100px',
      },
    },
    {
      breakpoint: 960,
      settings: {
        centerPadding: '60px',
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const PortfolioSlider = ({ slide }) => {
  return (
    <MediaSlider>
      <Slider {...settings}>
        {slide.map((data, index) => (
          <div key={index}>
            <img src={data.srcImg} alt='slide' />
          </div>
        ))}
      </Slider>
    </MediaSlider>
  );
};

export default PortfolioSlider;

PortfolioSlider.propTypes = {
  slide: PropTypes.array,
};

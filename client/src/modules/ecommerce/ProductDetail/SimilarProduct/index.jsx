import React from 'react';
import Slider from 'react-slick';
import GridItem from '../../Products/ProductListing/ProductGrid/GridItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StyledSimilarProductSlideView } from './index.styled';
import { ecommerce } from '@crema/mockapi/fakedb';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: false,
  prevArrow: false,

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
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

const SimilarProduct = () => {
  return (
    <StyledSimilarProductSlideView>
      <Slider className='slick-slider-global' {...settings}>
        {ecommerce.map((item, index) => (
          <GridItem key={index} item={item} />
        ))}
      </Slider>
    </StyledSimilarProductSlideView>
  );
};

export default SimilarProduct;

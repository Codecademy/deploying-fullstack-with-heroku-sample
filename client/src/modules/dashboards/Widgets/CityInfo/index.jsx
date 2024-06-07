import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import {
  StyledCityInfoImg,
  StyledCityInfoImgContent,
  StyledCityInfoSlide,
  StyledCityInfoSlider,
  StyledSliderImgContentAction,
} from './index.styled';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CityInfo = (props) => {
  const { cityData } = props;

  return (
    <AppCard heightFull className='no-card-space'>
      <StyledCityInfoSlider {...settings}>
        {cityData.map((city) => {
          return (
            <StyledCityInfoSlide key={city.id}>
              <StyledCityInfoImg src={city.image} alt='building' />
              <StyledCityInfoImgContent>
                <h3>{city.name}</h3>

                <StyledSliderImgContentAction>
                  <p>{city.desc}</p>
                </StyledSliderImgContentAction>
              </StyledCityInfoImgContent>
            </StyledCityInfoSlide>
          );
        })}
      </StyledCityInfoSlider>
    </AppCard>
  );
};

export default CityInfo;

CityInfo.defaultProps = {
  cityData: [],
};

CityInfo.propTypes = {
  cityData: PropTypes.array,
};

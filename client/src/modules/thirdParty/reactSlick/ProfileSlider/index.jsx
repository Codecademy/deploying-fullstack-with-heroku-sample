import React from 'react';
import AppCard from '@crema/components/AppCard';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import ProfileItem from './ProfileItem';
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

const ProfileSlider = ({ profile }) => {
  return (
    <AppCard style={{ height: '100%' }}>
      <MediaSlider>
        <Slider {...settings}>
          {profile.map((profile, index) => {
            return <ProfileItem key={index} profile={profile} />;
          })}
        </Slider>
      </MediaSlider>
    </AppCard>
  );
};

export default ProfileSlider;

ProfileSlider.propTypes = {
  profile: PropTypes.array,
};

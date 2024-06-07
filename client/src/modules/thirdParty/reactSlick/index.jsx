import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Col } from 'antd';
import ProfileSlider from './ProfileSlider';
import SlideBasic from './SlideBasic';
import SlideBasicTwo from './SlideBasicTwo';
import SlideBasicThree from './SlideBasicThree';
import SlideBasicArrow from './SlideBasicArrow';
import SlideBasicFour from './SlideBasicFour';
import SlideBasicFive from './SlideBasicFive';
import { reactSlickData } from '@crema/mockapi/fakedb';

const ReactSlick = () => {
  return (
    <>
      <AppComponentHeader
        title='React Slick'
        refUrl='https://react-slick.neostack.com/'
      />

      <AppRowContainer>
        <Col xs={24} lg={12}>
          <SlideBasic slideBasic={reactSlickData.slideBasic} />
        </Col>
        <Col xs={24} lg={12}>
          <SlideBasicArrow slideBasicArrow={reactSlickData.slideBasicArrow} />
        </Col>
        <Col xs={24} lg={12}>
          <SlideBasicTwo slideBasicTwo={reactSlickData.slideBasicTwo} />
        </Col>
        <Col xs={24} lg={12}>
          <SlideBasicThree slideBasicThree={reactSlickData.slideBasicThree} />
        </Col>
        <Col xs={24} lg={12}>
          <SlideBasicFour slideBasicFour={reactSlickData.slideBasicFour} />
        </Col>
        <Col xs={24} lg={12}>
          <SlideBasicFive slideBasicFive={reactSlickData.slideBasicFive} />
        </Col>
        <Col xs={24} lg={12}>
          <ProfileSlider profile={reactSlickData.profileSlide} />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default ReactSlick;

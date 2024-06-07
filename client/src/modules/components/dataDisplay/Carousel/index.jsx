import React from "react";
import { Col } from "antd";

import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import Vertical from "./Vertical";
import VerticalSource from "./Vertical?raw";
import FadeIn from "./FadeIn";
import FadeInSource from "./FadeIn?raw";
import ScrollAutomatically from "./ScrollAutomatically";
import ScrollAutomaticallySource from "./ScrollAutomatically?raw";
import { StyledCarouselWrapper } from "./index.styled";

const Carousel = () => {
  return (
    <StyledCarouselWrapper>
      <AppComponentHeader
        title="Carousel"
        refUrl="https://ant.design/components/carousel/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="carousel-a">
          <AppComponentCard
            title="Basic"
            description="Basic usage."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key="carousel-b">
          <AppComponentCard
            title="Position"
            description="There are 4 position options available."
            component={Vertical}
            source={VerticalSource}
          />
        </Col>
        <Col xs={24} lg={12} key="carousel-c">
          <AppComponentCard
            title="Fade In"
            description="Slides use fade for transition."
            component={FadeIn}
            source={FadeInSource}
          />
        </Col>
        <Col xs={24} lg={12} key="carousel-d">
          <AppComponentCard
            title="ScrollAutomatically"
            description="Timing of scrolling to the next card/picture."
            component={ScrollAutomatically}
            source={ScrollAutomaticallySource}
          />
        </Col>
      </AppRowContainer>
    </StyledCarouselWrapper>
  );
};

export default Carousel;

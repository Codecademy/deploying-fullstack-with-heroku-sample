import React, { Component } from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import SliderWithIcon from "./SliderWithIcon";
import SliderWithIconSource from "./SliderWithIcon?raw";
import SliderWithNumber from "./SliderWithNumber";
import SliderWithNumberSource from "./SliderWithNumber?raw";
import SliderWithDecimal from "./SliderWithDecimal";
import SliderWithDecimalSource from "./SliderWithDecimal?raw";
import SliderCustomize from "./SliderCustomize";
import SliderCustomizeSource from "./SliderCustomize?raw";
import SliderEvent from "./SliderEvent";
import SliderEventSource from "./SliderEvent?raw";
import SliderGarduated from "./SliderGarduated";
import SliderGarduatedSource from "./SliderGarduated?raw";
import VerticalSlider from "./VerticalSlider";
import VerticalSliderSource from "./VerticalSlider?raw";
import DraggableTrack from "./DraggableTrack";
import DraggableTrackSource from "./DraggableTrack?raw";
import Reverse from "./Reverse";
import ReverseSource from "./Reverse?raw";

class Slider extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title="Slider"
          refUrl="https://ant.design/components/slider/"
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key="slider-a">
            <AppComponentCard
              title="Basic"
              description="Basic slider. When range is true, display as dual thumb mode. When disable is true, the slider will not be interactable."
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key="slider-a1">
            <AppComponentCard
              title="Slider Event"
              description="The onChange callback function will fire when the user changes the sliders value. The onAfterChange callback function will fire when onmouseup fired."
              component={SliderEvent}
              source={SliderEventSource}
            />
          </Col>
          <Col xs={24} lg={12} key="slider-b">
            <AppComponentCard
              title="Slider With Icon"
              description="You can add an icon beside the slider to make it meaningful."
              component={SliderWithIcon}
              source={SliderWithIconSource}
            />
          </Col>
          <Col xs={24} lg={12} key="slider-b1">
            <AppComponentCard
              title="Draggable Track"
              description="Make range track draggable when set range.draggable Track."
              component={DraggableTrack}
              source={DraggableTrackSource}
            />
          </Col>
          <Col xs={24} lg={12} key="slider-b2">
            <AppComponentCard
              title="Reverse"
              description="Using reverse to render slider reversely."
              component={Reverse}
              source={ReverseSource}
            />
          </Col>
          <Col xs={24} lg={12} key="slider-c">
            <AppComponentCard
              title="Slider With Number"
              description="Synchronize with InputNumber component."
              component={SliderWithNumber}
              source={SliderWithNumberSource}
            />
          </Col>
          <Col xs={24} lg={12} key="slider-d">
            <AppComponentCard
              title="Slider Customize"
              description="Use tipFormatter to format content of Tooltip. If tipFormatter is null, hide it."
              component={SliderCustomize}
              source={SliderCustomizeSource}
            />
          </Col>

          <Col xs={24} lg={12} key="slider-f">
            <AppComponentCard
              title="SliderWithDecimal"
              component={SliderWithDecimal}
              source={SliderWithDecimalSource}
            />
          </Col>
          <Col xs={24} lg={12} key="slider-g">
            <AppComponentCard
              title="Vertical Slider"
              description="The vertical Slider."
              component={VerticalSlider}
              source={VerticalSliderSource}
            />
          </Col>
          <Col xs={24} lg={12} key="slider-h">
            <AppComponentCard
              title="Slider Garduated"
              description="Using marks property to mark a graduated slider, use value or defaultValue to specify the position of thumb. When included is false, means that different thumbs are coordinative. when step is null, users can only slide the thumbs onto marks."
              component={SliderGarduated}
              source={SliderGarduatedSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Slider;

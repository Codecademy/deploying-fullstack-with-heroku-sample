import React, { Component } from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import Disabled from "./Disabled";
import DisabledSource from "./Disabled?raw";
import HorizontalRadio from "./HorizontalRadio";
import HorizontalRadioSource from "./HorizontalRadio?raw";
import VerticalRadio from "./VerticalRadio";
import VerticalRadioSource from "./VerticalRadio?raw";
import OptionalRadio from "./OptionalRadio";
import OptionalRadioSource from "./OptionalRadio?raw";
import StyleRadio from "./StyleRadio";
import StyleRadioSource from "./StyleRadio?raw";
import SizeRadio from "./SizeRadio";
import SizeRadioSource from "./SizeRadio?raw";
import RadioGroup from "./RadioGroup";
import RadioGroupSource from "./RadioGroup?raw";
import SolidRadioButton from "./SolidRadioButton";
import SolidRadioButtonSource from "./SolidRadioButton?raw";

class Radio extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title="Radio"
          refUrl="https://ant.design/components/radio"
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key="radio-a">
            <AppComponentCard
              title="Basic"
              description="The simplest use."
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key="radio-b">
            <AppComponentCard
              title="Horizontal Radio"
              description="A group of radio components."
              component={HorizontalRadio}
              source={HorizontalRadioSource}
            />
          </Col>
          <Col xs={24} lg={12} key="radio-c">
            <AppComponentCard
              title="Disabled"
              description="Radio unavailable."
              component={Disabled}
              source={DisabledSource}
            />
          </Col>
          <Col xs={24} lg={12} key="radio-g">
            <AppComponentCard
              title="Radio Group"
              description="A group of radio components."
              component={RadioGroup}
              source={RadioGroupSource}
            />
          </Col>
          <Col xs={24} lg={12} key="radio-d">
            <AppComponentCard
              title="Vertical Radio"
              description="Vertical Radio.Group, with more radios."
              component={VerticalRadio}
              source={VerticalRadioSource}
            />
          </Col>
          <Col xs={24} lg={12} key="radio-e">
            <AppComponentCard
              title="Optional Radio"
              description="Render radios by configuring options. Radio type can also be set through the optionType parameter."
              component={OptionalRadio}
              source={OptionalRadioSource}
            />
          </Col>
          <Col xs={24} lg={12} key="radio-f">
            <AppComponentCard
              title="Style Radio"
              description="The combination of radio button style."
              component={StyleRadio}
              source={StyleRadioSource}
            />
          </Col>
          <Col xs={24} lg={12} key="radio-g1">
            <AppComponentCard
              title="Size Radio"
              description="There are three sizes available: large, medium, and small. It can coordinate with input box."
              component={SizeRadio}
              source={SizeRadioSource}
            />
          </Col>

          <Col xs={24} lg={12} key="radio-h">
            <AppComponentCard
              title="Solid Radio Button"
              description="Solid radio button style."
              component={SolidRadioButton}
              source={SolidRadioButtonSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Radio;

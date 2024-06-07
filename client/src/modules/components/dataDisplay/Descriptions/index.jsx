import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import Border from "./Border";
import BorderSource from "./Border?raw";
import CustomSize from "./CustomSize";
import CustomSizeSource from "./CustomSize?raw";
import Responsive from "./Responsive";
import ResponsiveSource from "./Responsive?raw";
import Vertical from "./Vertical";
import VerticalSource from "./Vertical?raw";
import VerticalBorder from "./VerticalBorder";
import VerticalBorderSource from "./VerticalBorder?raw";

const Descriptions = () => {
  return (
    <>
      <AppComponentHeader
        title="Descriptions"
        refUrl="https://ant.design/components/comment/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="descriptions-a">
          <AppComponentCard
            title="Basic"
            description="Simplest Usage."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key="descriptions-a1">
          <AppComponentCard
            title="Vertical"
            description="Simplest Usage."
            component={Vertical}
            source={VerticalSource}
          />
        </Col>
        <Col xs={24} lg={12} key="descriptions-b">
          <AppComponentCard
            title="Border"
            description="Descriptions with border and background color."
            component={Border}
            source={BorderSource}
          />
        </Col>
        <Col xs={24} lg={12} key="descriptions-c">
          <AppComponentCard
            title="Custom Size"
            description="Custom sizes to fit in a variety of containers."
            component={CustomSize}
            source={CustomSizeSource}
          />
        </Col>
        <Col xs={24} lg={12} key="descriptions-d">
          <AppComponentCard
            title="Responsive"
            description="Responsive configuration enables perfect presentation on small screen devices."
            component={Responsive}
            source={ResponsiveSource}
          />
        </Col>

        <Col xs={24} lg={12} key="descriptions-e">
          <AppComponentCard
            title="Vertical Border"
            description="Descriptions with border and background color."
            component={VerticalBorder}
            source={VerticalBorderSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Descriptions;

import React, { Component } from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Horizontal from "./Horizontal";
import HorizontalSource from "./Horizontal?raw";
import Vertical from "./Vertical";
import VerticalSource from "./Vertical?raw";
import DividerWithTitle from "./DividerWithTitle";
import DividerWithTitleSource from "./DividerWithTitle?raw";

class Divider extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title="Divider"
          refUrl="https://ant.design/components/divider/"
        />
        <AppRowContainer>
          <Col xs={24} key="divider-b">
            <AppComponentCard
              title="Vertical"
              component={Vertical}
              source={VerticalSource}
            />
          </Col>
          <Col xs={24} lg={12} key="divider-a">
            <AppComponentCard
              title="Horizontal"
              component={Horizontal}
              source={HorizontalSource}
            />
          </Col>

          <Col xs={24} lg={12} key="divider-c">
            <AppComponentCard
              title="DividerWithTitle"
              description='Divider with inner title, set orientation="left/right" to align it.'
              component={DividerWithTitle}
              source={DividerWithTitleSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Divider;

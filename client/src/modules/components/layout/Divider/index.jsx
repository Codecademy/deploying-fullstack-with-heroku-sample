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
import TextWithoutHeadingStyle from "./TextWithoutHeadingStyle";
import TextWithoutHeadingStyleSource from "./TextWithoutHeadingStyle?raw";

class Divider extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title="Divider"
          refUrl="https://ant.design/components/divider/"
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key="divider-a">
            <AppComponentCard
              title="Horizontal"
              description="Divider is horizontal by default. You can add text within Divider."
              component={Horizontal}
              source={HorizontalSource}
            />
          </Col>

          <Col xs={24} lg={12} key="divider-b">
            <AppComponentCard
              title="Divider With Title"
              description='Divider with inner title, set orientation="left/right" to align it.'
              component={DividerWithTitle}
              source={DividerWithTitleSource}
            />
          </Col>
          <Col xs={24} lg={12} key="divider-c">
            <AppComponentCard
              title="TextWithoutHeadingStyle"
              description="You can use non-heading style of divider text by setting plain."
              component={TextWithoutHeadingStyle}
              source={TextWithoutHeadingStyleSource}
            />
          </Col>
          <Col xs={24} lg={12} key="divider-d">
            <AppComponentCard
              title="Vertical"
              description='Use type="vertical" make it vertical.'
              component={Vertical}
              source={VerticalSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Divider;

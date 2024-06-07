import React, { Component } from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import Duration from "./Duration";
import DurationSource from "./Duration?raw";
import WithIcon from "./WithIcon";
import WithIconSource from "./WithIcon?raw";
import CustomClose from "./CustomClose";
import CustomCloseSource from "./CustomClose?raw";
import CustomizeIcon from "./CustomizeIcon";
import CustomizeIconSource from "./CustomizeIcon?raw";
import Placement from "./Placement";
import PlacementSource from "./Placement?raw";
import CustomizeStyle from "./CustomizeStyle";
import CustomizeStyleSource from "./CustomizeStyle?raw";

class Notification extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title="Notification"
          refUrl="https://ant.design/components/notification/"
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key="notification-a">
            <AppComponentCard
              title="Basic"
              description="The simplest usage that close the notification box after 4.5s."
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key="notification-b">
            <AppComponentCard
              title="Duration"
              description="ong the notification stays open."
              component={Duration}
              source={DurationSource}
            />
          </Col>
          <Col xs={24} lg={12} key="notification-c">
            <AppComponentCard
              title="Notification Icon"
              description="A notification box with a icon at the left side."
              component={WithIcon}
              source={WithIconSource}
            />
          </Col>
          <Col xs={24} lg={12} key="notification-d">
            <AppComponentCard
              title="Custom Close"
              description="To customize the style or font of the close button."
              component={CustomClose}
              source={CustomCloseSource}
            />
          </Col>
          <Col xs={24} lg={12} key="notification-e">
            <AppComponentCard
              title="Customize Icon"
              description="The icon can be customized to any react node."
              component={CustomizeIcon}
              source={CustomizeIconSource}
            />
          </Col>
          <Col xs={24} lg={12} key="notification-f">
            <AppComponentCard
              title="Customize Style"
              description="The style and className are available to customize Notification."
              component={CustomizeStyle}
              source={CustomizeStyleSource}
            />
          </Col>
          <Col xs={24} lg={12} key="notification-g">
            <AppComponentCard
              title="Placement"
              description="A notification box can appear from the topRight, bottomRight, bottomLeft or topLeft of the viewport."
              component={Placement}
              source={PlacementSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Notification;

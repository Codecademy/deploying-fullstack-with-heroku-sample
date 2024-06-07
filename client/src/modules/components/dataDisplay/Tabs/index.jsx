import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import Slide from "./Slide";
import SlideSource from "./Slide?raw";
import Size from "./Size";
import SizeSource from "./Size?raw";
import Position from "./Position";
import PositionSource from "./Position?raw";
import CardTab from "./CardTab";
import CardTabSource from "./CardTab?raw";
import CustomizedTrigger from "./CustomizedTrigger";
import CustomizedTriggerSource from "./CustomizedTrigger?raw";
import Disabled from "./Disabled";
import DisabledSource from "./Disabled?raw";
import Centered from "./Centered";
import CenteredSource from "./Centered?raw";
import Icon from "./Icon";
import IconSource from "./Icon?raw";
import ExtraContent from "./ExtraContent";
import ExtraContentSource from "./ExtraContent?raw";
import AddCloseTab from "./AddCloseTab";
import AddCloseTabSource from "./AddCloseTab?raw";
import CustomizedBar from "./CustomizedBar";
import CustomizedBarSource from "./CustomizedBar?raw";

const Tabs = () => {
  return (
    <>
      <AppComponentHeader
        title="Tabs"
        refUrl="https://ant.design/components/tabs/"
      />
      <AppRowContainer>
        <Col xs={24} xl={12} key="tab-a">
          <AppComponentCard
            title="Basic"
            description="Default activate first tab."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} xl={12} key="tab-b">
          <AppComponentCard
            title="Card Tab"
            description="Another type of Tabs, which doesnt support vertical mode."
            component={CardTab}
            source={CardTabSource}
          />
        </Col>
        <Col xs={24} xl={12} key="tab-c">
          <AppComponentCard
            title="Slide"
            description="In order to fit in more tabs, they can slide left and right (or up and down)."
            component={Slide}
            source={SlideSource}
          />
        </Col>
        <Col xs={24} xl={12} key="tab-d">
          <AppComponentCard
            title="Size"
            description="Large size tabs are usually used in page header, and small size could be used in Modal."
            component={Size}
            source={SizeSource}
          />
        </Col>
        <Col xs={24} xl={12} key="tab-e">
          <AppComponentCard
            title="Position"
            description="Tabs position: left, right, top or bottom. Will auto switch to top in mobile. "
            component={Position}
            source={PositionSource}
          />
        </Col>
        <Col xs={24} xl={12} key="tab-f">
          <AppComponentCard
            title="Customize Trigger"
            description="Should be used at the top of container, needs to override styles."
            component={CustomizedTrigger}
            source={CustomizedTriggerSource}
          />
        </Col>
        <Col xs={24} xl={12} key="tab-g1">
          <AppComponentCard
            title="Disabled"
            description="Disabled a tab."
            component={Disabled}
            source={DisabledSource}
          />
        </Col>
        <Col xs={24} xl={12} key="tab-h">
          <AppComponentCard
            title="Centered"
            description="Centered tabs."
            component={Centered}
            source={CenteredSource}
          />
        </Col>
        <Col xs={24} xl={12} key="tab-i">
          <AppComponentCard
            title="Icon"
            description="The Tab with Icon."
            component={Icon}
            source={IconSource}
          />
        </Col>

        <Col xs={24} xl={12} key="tab-g">
          <AppComponentCard
            title="Add Close Tab"
            description="Only card type Tabs support adding & closable. +Use closable={false} to disable close."
            component={AddCloseTab}
            source={AddCloseTabSource}
          />
        </Col>
        <Col xs={24} xl={12} key="tab-k">
          <AppComponentCard
            title="Customized Bar"
            description="Use react-sticky."
            component={CustomizedBar}
            source={CustomizedBarSource}
          />
        </Col>
        <Col xs={24} xl={12} key="tab-l">
          <AppComponentCard
            title="Extra Content"
            description="You can add extra actions to the right or left or even both side of Tabs."
            component={ExtraContent}
            source={ExtraContentSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Tabs;

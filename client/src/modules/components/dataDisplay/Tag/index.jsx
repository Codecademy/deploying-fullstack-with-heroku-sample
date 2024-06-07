import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import ColorTag from "./ColorTag";
import ColorTagSource from "./ColorTag?raw";
import Dynamic from "./Dynamic";
import DynamicSource from "./Dynamic?raw";
import HotTag from "./HotTag";
import HotTagSource from "./HotTag?raw";
import Controlled from "./Controlled";
import ControlledSource from "./Controlled?raw";
import Icon from "./Icon";
import IconSource from "./Icon?raw";
import Animate from "./Animate";
import AnimateSource from "./Animate?raw";
import StatusTag from "./StatusTag";
import StatusTagSource from "./StatusTag?raw";

const Tag = () => {
  return (
    <>
      <AppComponentHeader
        title="Tag"
        refUrl="https://ant.design/components/tabs/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="tag-a">
          <AppComponentCard
            title="Basic"
            description="Usage of basic Tag, and it could be closable by set closable property. Closable Tag supports onClose events."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key="tag-b">
          <AppComponentCard
            title="Dynamic"
            description="Generating a set of Tags by array, you can add and remove dynamically."
            component={Dynamic}
            source={DynamicSource}
          />
        </Col>
        <Col xs={24} lg={12} key="tag-c">
          <AppComponentCard
            title="Checkable"
            description="Checkable Tag works like Checkbox, click it to toggle checked state."
            component={HotTag}
            source={HotTagSource}
          />
        </Col>

        <Col xs={24} lg={12} key="tag-d">
          <AppComponentCard
            title="Controlled"
            description="By using the visible prop, you can control the close state of Tag."
            component={Controlled}
            source={ControlledSource}
          />
        </Col>
        <Col xs={24} lg={12} key="tag-e">
          <AppComponentCard
            title="Icon"
            description="By using the visible prop, you can control the close state of Tag."
            component={Icon}
            source={IconSource}
          />
        </Col>
        <Col xs={24} lg={12} key="tag-f">
          <AppComponentCard
            title="Animate"
            description="Animating the Tag by using rc-tween-one."
            component={Animate}
            source={AnimateSource}
          />
        </Col>
        <Col xs={24} lg={12} key="tag-g">
          <AppComponentCard
            title="StatusTag"
            description="Animating the Tag by using rc-tween-one."
            component={StatusTag}
            source={StatusTagSource}
          />
        </Col>
        <Col xs={24} lg={12} key="tag-h">
          <AppComponentCard
            title="Color Tag"
            description="We preset a series of colorful tag styles for use in different situations. You can also set it to a hex color string for custom color."
            component={ColorTag}
            source={ColorTagSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Tag;

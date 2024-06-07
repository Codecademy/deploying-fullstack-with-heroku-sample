import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import Type from "./Type";
import TypeSource from "./Type?raw";
import AutosetSize from "./AutosetSize";
import AutosetSizeSource from "./AutosetSize?raw";
import WithBadge from "./WithBadge";
import WithBadgeSource from "./WithBadge?raw";
import ResponsiveSize from "./ResponsiveSize";
import ResponsiveSizeSource from "./ResponsiveSize?raw";
import AvatarGroup from "./AvatarGroup";
import AvatarGroupSource from "./AvatarGroup?raw";

const Avatar = () => {
  return (
    <>
      <AppComponentHeader
        title="Avatar"
        refUrl="https://ant.design/components/avatar/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="avatar-a">
          <AppComponentCard
            title="Basic"
            description="Three sizes and two shapes are available."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key="avatar-b">
          <AppComponentCard
            title="Type"
            description="Image, Icon and letter are supported, and the latter two kinds of avatar can have custom colors and background colors."
            component={Type}
            source={TypeSource}
          />
        </Col>
        <Col xs={24} lg={12} key="avatar-c">
          <AppComponentCard
            title="Autoset Size"
            description="For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar. You can also use gap to set the unit distance between left and right sides."
            component={AutosetSize}
            source={AutosetSizeSource}
          />
        </Col>
        <Col xs={24} lg={12} key="avatar-d">
          <AppComponentCard
            title="With Badge"
            description="Usually used for reminders and notifications."
            component={WithBadge}
            source={WithBadgeSource}
          />
        </Col>
        <Col xs={24} lg={12} key="avatar-f">
          <AppComponentCard
            title="Responsive Size"
            description="Avatar size can be automatically adjusted based on the screen size."
            component={ResponsiveSize}
            source={ResponsiveSizeSource}
          />
        </Col>
        <Col xs={24} lg={12} key="avatar-g">
          <AppComponentCard
            title="Avatar Group"
            description="Avatar size can be automatically adjusted based on the screen size."
            component={AvatarGroup}
            source={AvatarGroupSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Avatar;

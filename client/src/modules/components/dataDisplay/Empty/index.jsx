import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import ChoseImage from "./ChoseImage";
import ChoseImageSource from "./ChoseImage?raw";
import Customize from "./Customize";
import CustomizeSource from "./Customize?raw";
import ConfigProvider from "./ConfigProvider";
import ConfigProviderSource from "./ConfigProvider?raw";
import NoDescription from "./NoDescription";
import NoDescriptionSource from "./NoDescription?raw";

const Empty = () => {
  return (
    <>
      <AppComponentHeader
        title="Empty"
        refUrl="https://ant.design/components/empty/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="empty-a">
          <AppComponentCard
            title="Basic"
            description="Simplest Usage."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key="empty-b">
          <AppComponentCard
            title="Chose Image"
            description="You can choose another style of image by setting image to Empty.PRESENTED_IMAGE_SIMPLE."
            component={ChoseImage}
            source={ChoseImageSource}
          />
        </Col>
        <Col xs={24} lg={12} key="empty-c">
          <AppComponentCard
            title="Customize"
            description="Customize image source, image size, description and extra content."
            component={Customize}
            source={CustomizeSource}
          />
        </Col>
        <Col xs={24} lg={12} key="empty-d">
          <AppComponentCard
            title="No Description"
            description="Simplest Usage with no description."
            component={NoDescription}
            source={NoDescriptionSource}
          />
        </Col>
        <Col xs={24} lg={12} key="empty-e">
          <AppComponentCard
            title="Config Provider"
            description="Use ConfigProvider set global Empty style."
            component={ConfigProvider}
            source={ConfigProviderSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Empty;

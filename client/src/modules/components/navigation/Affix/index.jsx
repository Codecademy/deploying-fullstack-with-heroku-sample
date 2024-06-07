import React from "react";
import { Col } from "antd";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import Callback from "./Callback";
import CallbackSource from "./Callback?raw";
import ContainerToScroll from "./ContainerToScroll";
import ContainerToScrollSource from "./ContainerToScroll?raw";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

const Affix = () => {
  return (
    <>
      <AppComponentHeader
        title="Affix"
        refUrl="https://ant.design/components/afix/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="affix-a">
          <AppComponentCard
            title="Basic"
            description="The simplest usage."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key="affix-b">
          <AppComponentCard
            title="Callback"
            description="Callback with affixed state."
            component={Callback}
            source={CallbackSource}
          />
        </Col>
        <Col xs={24} lg={12} key="affix-c">
          <AppComponentCard
            title="ContainerToScroll"
            description="Set a target for 'Affix', which is listen to scroll event of target element (default is window)."
            component={ContainerToScroll}
            source={ContainerToScrollSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Affix;

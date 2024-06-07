import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import Custom from "./Custom";
import CustomSource from "./Custom?raw";

const BackTop = () => {
  return (
    <>
      <AppComponentHeader
        title="Back Top"
        refUrl="https://ant.design/components/back-top/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="back-a">
          <AppComponentCard
            title="Basic"
            description="The most basic usage."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key="back-b">
          <AppComponentCard
            title="Custom"
            description="You can customize the style of the button, just note the size limit: no more than 40px * 40px."
            component={Custom}
            source={CustomSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default BackTop;

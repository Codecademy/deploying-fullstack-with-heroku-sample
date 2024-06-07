import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import Unit from "./Unit";
import UnitSource from "./Unit?raw";
import InCard from "./InCard";
import InCardSource from "./InCard?raw";
import CountdownDemoCard from "./CountdownDemoCard";
import CountdownDemoCardSource from "./CountdownDemoCard?raw";

const Statistic = () => {
  return (
    <>
      <AppComponentHeader
        title="Statistic"
        refUrl="https://ant.design/components/statistic/"
      />
      <AppRowContainer>
        <Col xs={24} xl={12} key="tab-a">
          <AppComponentCard
            title="Unit"
            description="Add unit through prefix and suffix."
            component={Unit}
            source={UnitSource}
          />
        </Col>
        <Col xs={24} xl={12} key="tab-b">
          <AppComponentCard
            title="InCard"
            description="Display statistic data in Card."
            component={InCard}
            source={InCardSource}
          />
        </Col>
        <Col xs={24} xl={12} key="tab-c">
          <AppComponentCard
            title="Basic"
            description="Simplest Usage."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} xl={12} key="tab-d">
          <AppComponentCard
            title="Count down Demo Card"
            description="Countdown component."
            component={CountdownDemoCard}
            source={CountdownDemoCardSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Statistic;

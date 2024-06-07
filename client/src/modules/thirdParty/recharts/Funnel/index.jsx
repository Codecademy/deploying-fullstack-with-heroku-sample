import React from "react";
import SimpleFunnel from "./Components/SimpleFunnel";
import SimpleFunnelSource from "./Components/SimpleFunnel?raw";
import { Col } from "antd";

import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowSimpleContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

const Treemap = () => {
  return (
    <>
      <AppComponentHeader
        title="Funnel Chart"
        refUrl="http://recharts.org/en-US/api/FunnelChart/"
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Simple FunnelChart"
            component={SimpleFunnel}
            source={SimpleFunnelSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default Treemap;

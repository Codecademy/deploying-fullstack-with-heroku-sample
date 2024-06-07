import React from "react";
import SimpleScatterChart from "./Components/SimpleScatterChart";
import SimpleScatterChartSource from "./Components/SimpleScatterChart?raw";
import ThreeDimScatterChart from "./Components/ThreeDimScatterChart";
import ThreeDimScatterChartSource from "./Components/ThreeDimScatterChart?raw";
import { Col } from "antd";

import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowSimpleContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

const Scatter = () => {
  return (
    <>
      <AppComponentHeader
        title="ScatterChart"
        refUrl="http://recharts.org/en-US/api/ScatterChart"
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Simple Scatter Chart"
            component={SimpleScatterChart}
            source={SimpleScatterChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Three Dim Scatter Chart"
            component={ThreeDimScatterChart}
            source={ThreeDimScatterChartSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default Scatter;

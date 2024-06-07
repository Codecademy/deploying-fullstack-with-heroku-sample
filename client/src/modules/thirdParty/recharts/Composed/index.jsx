import React from "react";
import LineBarAreaComposedChart from "./Components/LineBarAreaComposedChart";
import LineBarAreaComposedChartSource from "./Components/LineBarAreaComposedChart?raw";
import VerticalComposedChart from "./Components/VerticalComposedChart";
import VerticalComposedChartSource from "./Components/VerticalComposedChart?raw";
import SameDataComposedChart from "./Components/SameDataComposedChart";
import SameDataComposedChartSource from "./Components/SameDataComposedChart?raw";
import ComposedChartWithAxisLabels from "./Components/ComposedChartWithAxisLabels";
import ComposedChartWithAxisLabelsSource from "./Components/ComposedChartWithAxisLabels?raw";
import { Col } from "antd";

import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowSimpleContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

const ComposedChart = () => {
  return (
    <>
      <AppComponentHeader
        title="Composed Chart"
        description="A chart composed of line, area, and bar charts. When you just want to draw a chart of a single type like line, then LineChart is recommended."
        refUrl="http://recharts.org/en-US/api/ComposedChart/"
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Line Bar Area Composed Chart"
            component={LineBarAreaComposedChart}
            source={LineBarAreaComposedChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Line Bar Area Composed Chart"
            component={VerticalComposedChart}
            source={VerticalComposedChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Same Data Composed Chart"
            component={SameDataComposedChart}
            source={SameDataComposedChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Composed Chart With Axis Labels"
            component={ComposedChartWithAxisLabels}
            source={ComposedChartWithAxisLabelsSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default ComposedChart;

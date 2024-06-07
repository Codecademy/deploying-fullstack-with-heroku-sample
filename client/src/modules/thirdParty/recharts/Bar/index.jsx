import TinyBarChart from "./Components/TinyBarChart";
import TinyBarChartSource from "./Components/TinyBarChart?raw";
import StackedBarChart from "./Components/StackedBarChart";
import StackedBarChartSource from "./Components/StackedBarChart?raw";
import MixBarChart from "./Components/MixBarChart";
import MixBarChartSource from "./Components/MixBarChart?raw";
import CustomShapeBarChart from "./Components/CustomShapeBarChart";
import CustomShapeBarChartSource from "./Components/CustomShapeBarChart?raw";
import PositiveAndNegativeBarChart from "./Components/PositiveAndNegativeBarChart";
import PositiveAndNegativeBarChartSource from "./Components/PositiveAndNegativeBarChart?raw";
import BarChartStackedBySign from "./Components/BarChartStackedBySign";
import BarChartStackedBySignSource from "./Components/BarChartStackedBySign?raw";
import BiaxialBarChart from "./Components/BiaxialBarChart";
import BiaxialBarChartSource from "./Components/BiaxialBarChart?raw";
import { Col } from "antd";

import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowSimpleContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

const BarChart = () => {
  return (
    <>
      <AppComponentHeader
        title="Bar Chart"
        description="All svg elements can be added into the BarChart component, such as defs, linearGradient, etc."
        refUrl="http://recharts.org/en-US/api/BarChart/"
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Tiny Bar Chart"
            component={TinyBarChart}
            source={TinyBarChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Stacked Bar Chart"
            component={StackedBarChart}
            source={StackedBarChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Mix Bar Chart"
            component={MixBarChart}
            source={MixBarChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Custom Shape Bar Chart"
            component={CustomShapeBarChart}
            source={CustomShapeBarChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Positive And Negative Bar Chart"
            component={PositiveAndNegativeBarChart}
            source={PositiveAndNegativeBarChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Bar Chart Stacked By Sign"
            component={BarChartStackedBySign}
            source={BarChartStackedBySignSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Biaxial Bar Chart"
            component={BiaxialBarChart}
            source={BiaxialBarChartSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default BarChart;

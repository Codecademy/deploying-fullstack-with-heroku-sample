
import TwoLevelPieChart from "./Components/TwoLevelPieChart";
import TwoLevelPieChartSource from "./Components/TwoLevelPieChart?raw";
import StraightAnglePieChart from "./Components/StraightAnglePieChart";
import StraightAnglePieChartSource from "./Components/StraightAnglePieChart?raw";
import TwoSimplePieChart from "./Components/TwoSimplePieChart";
import TwoSimplePieChartSource from "./Components/TwoSimplePieChart?raw";
import CustomActiveShapePieChart from "./Components/CustomActiveShapePieChart";
import CustomActiveShapePieChartSource from "./Components/CustomActiveShapePieChart?raw";
import PieChartWithPaddingAngle from "./Components/PieChartWithPaddingAngle";
import PieChartWithPaddingAngleSource from "./Components/PieChartWithPaddingAngle?raw";
import { Col } from "antd";

import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowSimpleContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

const PieChart = () => {
  return (
    <>
      <AppComponentHeader
        title="Pie Chart"
        refUrl="http://recharts.org/en-US/api/PieChart/"
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Two Level Pie Chart"
            component={TwoLevelPieChart}
            source={TwoLevelPieChartSource}
          />
        </Col>

        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Straight Angle Pie Chart"
            component={StraightAnglePieChart}
            source={StraightAnglePieChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Custom Active Shape Pie Chart"
            component={CustomActiveShapePieChart}
            source={CustomActiveShapePieChartSource}
          />
        </Col>

        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Two Simple Pie Chart"
            component={TwoSimplePieChart}
            source={TwoSimplePieChartSource}
          />
        </Col>

        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Pie Chart With Padding Angle"
            component={PieChartWithPaddingAngle}
            source={PieChartWithPaddingAngleSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default PieChart;

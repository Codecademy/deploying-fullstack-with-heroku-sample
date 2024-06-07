import SimpleRadialBarChart from "./Components/SimpleRadialBarChart";
import SimpleRadialBarChartSource from "./Components/SimpleRadialBarChart?raw";
import { Col } from "antd";

import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowSimpleContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

const Radial = () => {
  return (
    <>
      <AppComponentHeader
        title="Radial Bar Chart"
        refUrl="http://recharts.org/en-US/api/RadialBarChart/"
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <AppComponentCard
            title="Simple Radial Bar Chart"
            component={SimpleRadialBarChart}
            source={SimpleRadialBarChartSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default Radial;

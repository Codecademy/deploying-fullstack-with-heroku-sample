import SimpleRadarChart from "./Components/SimpleRadarChart";
import SimpleRadarChartSource from "./Components/SimpleRadarChart?raw";
import SpecifiedDomainRadarChart from "./Components/SpecifiedDomainRadarChart";
import SpecifiedDomainRadarChartSource from "./Components/SpecifiedDomainRadarChart?raw";
import { Col } from "antd";

import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowSimpleContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

const Radar = () => {
  return (
    <>
      <AppComponentHeader
        title="Radar Chart"
        refUrl="http://recharts.org/en-US/api/RadarChart"
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Simple Radar Chart"
            component={SimpleRadarChart}
            source={SimpleRadarChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Specified Domain Radar Chart"
            component={SpecifiedDomainRadarChart}
            source={SpecifiedDomainRadarChartSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default Radar;

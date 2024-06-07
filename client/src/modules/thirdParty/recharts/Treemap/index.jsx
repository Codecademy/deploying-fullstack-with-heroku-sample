import SimpleTreemap from "./Components/SimpleTreemap";
import SimpleTreemapSource from "./Components/SimpleTreemap?raw";
import CustomContentTreemap from "./Components/CustomContentTreemap";
import CustomContentTreemapSource from "./Components/CustomContentTreemap?raw";
import { Col } from "antd";

import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowSimpleContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

const Treemap = () => {
  return (
    <>
      <AppComponentHeader
        title="Treemap"
        refUrl="http://recharts.org/en-US/api/Treemap/"
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Simple Tree map"
            component={SimpleTreemap}
            source={SimpleTreemapSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <AppComponentCard
            title="Custom Content Treemap"
            component={CustomContentTreemap}
            source={CustomContentTreemapSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default Treemap;

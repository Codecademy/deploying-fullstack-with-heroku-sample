import React, { Component } from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";
import Locale from "./Locale";
import LocaleSource from "./Locale?raw";
import Direction from "./Direction";
import DirectionSource from "./Direction?raw";
import ComponentSize from "./ComponentSize";
import ComponentSizeSource from "./ComponentSize?raw";
import GlobalTheme from "./GlobalTheme";
import GlobalThemeSource from "./GlobalTheme?raw";

class ConfigProvider extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title="Config Provider"
          refUrl="https://ant.design/components/config-provider/"
        />
        <AppRowContainer>
          <Col xs={24} key="provider-a">
            <AppComponentCard
              title="Locale"
              description="Components which need localization support are listed here, you can toggle the language in the demo."
              component={Locale}
              source={LocaleSource}
            />
          </Col>
          <Col xs={24} key="provider-b">
            <AppComponentCard
              title="Direction"
              description="Components which support rtl direction are listed here, you can toggle the direction in the demo."
              component={Direction}
              source={DirectionSource}
            />
          </Col>
          <Col xs={24} key="provider-c">
            <AppComponentCard
              title="Component Size"
              description="Config component default size."
              component={ComponentSize}
              source={ComponentSizeSource}
            />
          </Col>
          <Col xs={24} key="provider-d">
            <AppComponentCard
              title="Global Theme"
              description="Modify global theme color by css variable which IE not support. Css variable depends on the design, it may adjust so please do not directly use it. You can go to other components page for more detail style. Check this to view detail."
              component={GlobalTheme}
              source={GlobalThemeSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default ConfigProvider;

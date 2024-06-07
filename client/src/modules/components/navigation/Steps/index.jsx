import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import SwitchStep from "./SwitchStep";
import SwitchStepSource from "./SwitchStep?raw";
import MiniVersion from "./MiniVersion";
import MiniVersionSource from "./MiniVersion?raw";
import WithIcon from "./WithIcon";
import WithIconSource from "./WithIcon?raw";
import Vertical from "./Vertical";
import VerticalSource from "./Vertical?raw";
import VerticalVersion from "./VerticalVersion";
import VerticalVersionSource from "./VerticalVersion?raw";
import ErrorStatus from "./ErrorStatus";
import ErrorStatusSource from "./ErrorStatus?raw";
import DotStyle from "./DotStyle";
import DotStyleSource from "./DotStyle?raw";
import CustomizedDotStyle from "./CustomizedDotStyle";
import CustomizedDotStyleSource from "./CustomizedDotStyle?raw";
import StepsWithProgress from "./StepsWithProgress";
import StepsWithProgressSource from "./StepsWithProgress?raw";
import Clickable from "./Clickable";
import ClickableSource from "./Clickable?raw";
import InlineSteps from "./InlineSteps";
import InlineStepsSource from "./InlineSteps?raw";

import NavigationSteps from "./NavigationSteps";
import NavigationStepsSource from "./NavigationSteps?raw";

const Steps = () => {
  return (
    <>
      <AppComponentHeader
        title="Steps"
        refUrl="https://ant.design/components/steps/"
      />
      <AppRowContainer>
        <Col span={24} key="step-a">
          <AppComponentCard
            title="Basic"
            description="The simplest usage."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col span={24} key="step-b">
          <AppComponentCard
            title="Mini Version"
            description='By setting like this: <Steps size="small">, you can get a mini version.'
            component={MiniVersion}
            source={MiniVersionSource}
          />
        </Col>
        <Col span={24} key="step-c">
          <AppComponentCard
            title="With Icon"
            description="You can use your own custom icons by setting the property icon for Steps.Step."
            component={WithIcon}
            source={WithIconSource}
          />
        </Col>
        <Col span={24} key="step-d">
          <AppComponentCard
            title="SwitchStep"
            description="A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right."
            component={SwitchStep}
            source={SwitchStepSource}
          />
        </Col>
        <Col span={24} key="step-e">
          <AppComponentCard
            title="Vertical"
            description="A simple step bar in the vertical direction."
            component={Vertical}
            source={VerticalSource}
          />
        </Col>
        <Col span={24} key="step-f">
          <AppComponentCard
            title="Vertical Version"
            description="A simple mini version step bar in the vertical direction."
            component={VerticalVersion}
            source={VerticalVersionSource}
          />
        </Col>
        <Col span={24} key="step-g">
          <AppComponentCard
            title="ErrorStatus"
            description="By using status of Steps, you can specify the state for current step."
            component={ErrorStatus}
            source={ErrorStatusSource}
          />
        </Col>
        <Col span={24} key="step-h">
          <AppComponentCard
            title="DotStyle"
            description="Steps with progress dot style."
            component={DotStyle}
            source={DotStyleSource}
          />
        </Col>
        <Col span={24} key="step-j">
          <AppComponentCard
            title="CustomizedDotStyle"
            description="You can customize the display for Steps with progress dot style."
            component={CustomizedDotStyle}
            source={CustomizedDotStyleSource}
          />
        </Col>
        <Col span={24} key="step-k">
          <AppComponentCard
            title="Clickable"
            description="Setting onChange makes Steps clickable."
            component={Clickable}
            source={ClickableSource}
          />
        </Col>
        <Col span={24} key="step-l">
          <AppComponentCard
            title="NavigationSteps"
            description="Navigation steps."
            component={NavigationSteps}
            source={NavigationStepsSource}
          />
        </Col>
        <Col span={24} key="step-m">
          <AppComponentCard
            title="StepsWithProgress"
            description="Steps with progress."
            component={StepsWithProgress}
            source={StepsWithProgressSource}
          />
        </Col>
        <Col span={24} key="step-i">
          <AppComponentCard
            title="InlineSteps"
            description="Inline Steps"
            component={InlineSteps}
            source={InlineStepsSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Steps;

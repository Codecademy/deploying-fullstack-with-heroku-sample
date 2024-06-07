import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import Trigger from "./Trigger";
import TriggerSource from "./Trigger?raw";
import Placement from "./Placement";
import PlacementSource from "./Placement?raw";
import Control from "./Control";
import ControlSource from "./Control?raw";
import ArrowPoint from "./ArrowPoint";
import ArrowPointSource from "./ArrowPoint?raw";
import HoverWithClickPopover from "./HoverWithClickPopover";
import HoverWithClickPopoverSource from "./HoverWithClickPopover?raw";

const Popover = () => {
  return (
    <>
      <AppComponentHeader
        title="Popover"
        refUrl="https://ant.design/components/popover/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="popover-a">
          <AppComponentCard
            title="Basic"
            description="The most basic example. The size of the floating layer depends on the contents region."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key="popover-b">
          <AppComponentCard
            title="Trigger"
            description="Mouse to click, focus and move in."
            component={Trigger}
            source={TriggerSource}
          />
        </Col>
        <Col xs={24} lg={12} key="popover-c">
          <AppComponentCard
            title="Control"
            description="Use visible prop to control the display of the card."
            component={Control}
            source={ControlSource}
          />
        </Col>
        <Col xs={24} lg={12} key="popover-d">
          <AppComponentCard
            title="Arrow Point"
            description="The arrow points to the center of the target element, which set arrowPointAtCenter."
            component={ArrowPoint}
            source={ArrowPointSource}
          />
        </Col>
        <Col xs={24} lg={12} key="popover-e">
          <AppComponentCard
            title="Placement"
            description="There are 12 placement options available."
            component={Placement}
            source={PlacementSource}
          />
        </Col>
        <Col xs={24} lg={12} key="popover-f">
          <AppComponentCard
            title="Hover With Click Popover"
            description="The following example shows how to create a popover which can be hovered and clicked."
            component={HoverWithClickPopover}
            source={HoverWithClickPopoverSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Popover;

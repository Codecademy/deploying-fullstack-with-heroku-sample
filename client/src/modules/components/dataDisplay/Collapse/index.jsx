import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import Accordion from "./Accordion";
import AccordionSource from "./Accordion?raw";
import NestedPanel from "./NestedPanel";
import NestedPanelSource from "./NestedPanel?raw";
import Borderless from "./Borderless";
import BorderlessSource from "./Borderless?raw";
import CustomPanel from "./CustomPanel";
import CustomPanelSource from "./CustomPanel?raw";
import NoArrow from "./NoArrow";
import NoArrowSource from "./NoArrow?raw";
import ExtraNode from "./ExtraNode";
import ExtraNodeSource from "./ExtraNode?raw";
import GhostCollapse from "./GhostCollapse";
import GhostCollapseSource from "./GhostCollapse?raw";
import Collapsible from "./Collapsible";
import CollapsibleSource from "./Collapsible?raw";

const Collapse = () => {
  return (
    <>
      <AppComponentHeader
        title="Collapse"
        refUrl="https://ant.design/components/collapse/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="collapse-a">
          <AppComponentCard
            title="Collapse"
            description="By default, any number of panels can be expanded at a time. The first panel is expanded in this example."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key="collapse-d">
          <AppComponentCard
            title="Border less"
            description="A borderless style of Collapse."
            component={Borderless}
            source={BorderlessSource}
          />
        </Col>
        <Col xs={24} lg={12} key="collapse-b">
          <AppComponentCard
            title="Accordion"
            description="In accordion mode, only one panel can be expanded at a time."
            component={Accordion}
            source={AccordionSource}
          />
        </Col>
        <Col xs={24} lg={12} key="collapse-c">
          <AppComponentCard
            title="Nested Panel"
            description="Collapse is nested inside the Collapse."
            component={NestedPanel}
            source={NestedPanelSource}
          />
        </Col>

        <Col xs={24} lg={12} key="collapse-e">
          <AppComponentCard
            title="Custom Panel"
            description="Customize the background, border, margin styles and icon for each panel."
            component={CustomPanel}
            source={CustomPanelSource}
          />
        </Col>
        <Col xs={24} lg={12} key="collapse-f1">
          <AppComponentCard
            title="No Arrow"
            description="You can hide the arrow icon by passing showArrow={false} to CollapsePanel component."
            component={NoArrow}
            source={NoArrowSource}
          />
        </Col>
        <Col xs={24} lg={12} key="collapse-g">
          <AppComponentCard
            title="Extra Node"
            description="More than one panel can be expanded at a time, the first panel is initialized to be active in this case."
            component={ExtraNode}
            source={ExtraNodeSource}
          />
        </Col>
        <Col xs={24} lg={12} key="collapse-f">
          <AppComponentCard
            title="GhostCollapse"
            description="Making collapses background to transparent."
            component={GhostCollapse}
            source={GhostCollapseSource}
          />
        </Col>
        <Col xs={24} lg={12} key="collapse-h">
          <AppComponentCard
            title="Collapsible"
            description="Specify the trigger area of collapsible by collapsible."
            component={Collapsible}
            source={CollapsibleSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Collapse;

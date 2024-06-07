import React, { Component } from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import ExtraActions from "./ExtraActions";
import ExtraActionsSource from "./ExtraActions?raw";
import SubmitFormInDrawer from "./SubmitFormInDrawer";
import SubmitFormInDrawerSource from "./SubmitFormInDrawer?raw";
import MultiLevelDrawer from "./MultiLevelDrawer";
import MultiLevelDrawerSource from "./MultiLevelDrawer?raw";
import CustomPlacement from "./CustomPlacement";
import CustomPlacementSource from "./CustomPlacement?raw";
import PreviewDrawer from "./PreviewDrawer";
import PreviewDrawerSource from "./PreviewDrawer?raw";
import PresettedSize from "./PresettedSize";
import PresettedSizeSource from "./PresettedSize?raw";

class Drawer extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title="Drawer"
          refUrl="https://ant.design/components/drawer/"
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key="drawer-a">
            <AppComponentCard
              title="Basic"
              description="Basic drawer."
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key="drawer-b">
            <AppComponentCard
              title="Extra Actions"
              description="Extra actions should be placed at corner of drawer in Ant Design, you can using extra prop for that."
              component={ExtraActions}
              source={ExtraActionsSource}
            />
          </Col>
          <Col xs={24} lg={12} key="drawer-c">
            <AppComponentCard
              title="Submit Form In Drawer"
              description="Use a form in Drawer with a submit button."
              component={SubmitFormInDrawer}
              source={SubmitFormInDrawerSource}
            />
          </Col>
          <Col xs={24} lg={12} key="drawer-d">
            <AppComponentCard
              title="MultiLevel Drawer"
              description="Open a new drawer on top of an existing drawer to handle multi branch tasks."
              component={MultiLevelDrawer}
              source={MultiLevelDrawerSource}
            />
          </Col>
          <Col xs={24} lg={12} key="drawer-e">
            <AppComponentCard
              title="Custom Placement"
              description="The Drawer can appear from any edge of the screen."
              component={CustomPlacement}
              source={CustomPlacementSource}
            />
          </Col>

          <Col xs={24} lg={12} key="drawer-f">
            <AppComponentCard
              title="Presetted Size"
              description="The default width (or height) of Drawer is 378px, and there is a presetted large size 736px."
              component={PresettedSize}
              source={PresettedSizeSource}
            />
          </Col>
          <Col xs={24} lg={12} key="drawer-g">
            <AppComponentCard
              title="Preview Drawer"
              description="Use Drawer to quickly preview details of an object, such as those in a list."
              component={PreviewDrawer}
              source={PreviewDrawerSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Drawer;

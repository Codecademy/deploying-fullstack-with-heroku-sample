import React from "react";
import { Col } from "antd";

import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import Disabled from "./Disabled";
import DisabledSource from "./Disabled?raw";
import ControlledCheckbox from "./ControlledCheckbox";
import ControlledCheckboxSource from "./ControlledCheckbox?raw";
import CheckboxGroups from "./CheckboxGroups";
import CheckboxGroupsSource from "./CheckboxGroups?raw";
import UseWithGrid from "./UseWithGrid";
import UseWithGridSource from "./UseWithGrid?raw";
import CheckAll from "./CheckAll";
import CheckAllSource from "./CheckAll?raw";

const Checkbox = () => {
  return (
    <>
      <AppComponentHeader
        title="Checkbox"
        refUrl="https://ant.design/components/checkbox/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="checkbox-a">
          <AppComponentCard
            title="Basic"
            description="The simplest usage."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key="checkbox-b">
          <AppComponentCard
            title="Controlled Checkbox"
            description="Set a target for 'Affix', which is listen to scroll event of target element (default is window)."
            component={ControlledCheckbox}
            source={ControlledCheckboxSource}
          />
        </Col>
        <Col xs={24} lg={12} key="checkbox-c">
          <AppComponentCard
            title="Disabled"
            description="The simplest usage."
            component={Disabled}
            source={DisabledSource}
          />
        </Col>
        <Col xs={24} lg={12} key="checkbox-d">
          <AppComponentCard
            title="Use With Grid"
            description="Callback with affixed state."
            component={UseWithGrid}
            source={UseWithGridSource}
          />
        </Col>
        <Col span={24} key="checkbox-e">
          <AppComponentCard
            title="Checkbox Groups"
            description="Callback with affixed state."
            component={CheckboxGroups}
            source={CheckboxGroupsSource}
          />
        </Col>
        <Col span={24} key="checkbox-f">
          <AppComponentCard
            title="Check All"
            description="Callback with affixed state."
            component={CheckAll}
            source={CheckAllSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Checkbox;

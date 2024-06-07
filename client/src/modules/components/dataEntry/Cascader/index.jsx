import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import DefaultValue from "./DefaultValue";
import DefaultValueSource from "./DefaultValue?raw";
import CustomTrigger from "./CustomTrigger";
import CustomTriggerSource from "./CustomTrigger?raw";
import Hover from "./Hover";
import HoverSource from "./Hover?raw";
import DisabledOption from "./DisabledOption";
import DisabledOptionSource from "./DisabledOption?raw";
import ChangeOnSelect from "./ChangeOnSelect";
import ChangeOnSelectSource from "./ChangeOnSelect?raw";
import Size from "./Size";
import SizeSource from "./Size?raw";
import CustomRender from "./CustomRender";
import CustomRenderSource from "./CustomRender?raw";
import Search from "./Search";
import SearchSource from "./Search?raw";
import LoadOptions from "./LoadOptions";
import LoadOptionsSource from "./LoadOptions?raw";
import Multiple from "../Cascader/Multiple";
import MultipleSource from "../Cascader/Multiple?raw";
import CustomDropDown from "../Cascader/CustomDropDown";
import CustomDropDownSource from "../Cascader/CustomDropDown?raw";
import CustomFieldNames from "../Cascader/CustomFieldNames";
import CustomFieldNamesSource from "../Cascader/CustomFieldNames?raw";

const Cascader = () => {
  return (
    <>
      <AppComponentHeader
        title="Cascader"
        refUrl="https://ant.design/components/cascader/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="cascader-a">
          <AppComponentCard
            title="Basic"
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key="cascader-b">
          <AppComponentCard
            title="DefaultValue"
            component={DefaultValue}
            source={DefaultValueSource}
          />
        </Col>
        <Col xs={24} lg={12} key="cascader-c">
          <AppComponentCard
            title="Custom Trigger"
            component={CustomTrigger}
            source={CustomTriggerSource}
          />
        </Col>
        <Col xs={24} lg={12} key="cascader-d">
          <AppComponentCard
            title="Hover"
            component={Hover}
            source={HoverSource}
          />
        </Col>
        <Col xs={24} lg={12} key="cascader-e">
          <AppComponentCard
            title="Disabled Option"
            component={DisabledOption}
            source={DisabledOptionSource}
          />
        </Col>
        <Col xs={24} lg={12} key="cascader-f">
          <AppComponentCard
            title="Load Options"
            component={LoadOptions}
            source={LoadOptionsSource}
          />
        </Col>
        <Col xs={24} lg={12} key="cascader-g">
          <AppComponentCard
            title="Change On Select"
            component={ChangeOnSelect}
            source={ChangeOnSelectSource}
          />
        </Col>
        <Col xs={24} lg={12} key="cascader-h">
          <AppComponentCard
            title="Custom Render"
            component={CustomRender}
            source={CustomRenderSource}
          />
        </Col>
        <Col xs={24} lg={12} key="cascader-i">
          <AppComponentCard
            title="Search"
            component={Search}
            source={SearchSource}
          />
        </Col>
        <Col xs={24} lg={12} key="cascader-j">
          <AppComponentCard title="Size" component={Size} source={SizeSource} />
        </Col>
        <Col xs={24} lg={12} key="cascader-j2">
          <AppComponentCard
            title="Multiple"
            component={Multiple}
            source={MultipleSource}
          />
        </Col>
        <Col xs={24} lg={12} key="cascader-k">
          <AppComponentCard
            title="Custom Drop Down"
            component={CustomDropDown}
            source={CustomDropDownSource}
          />
        </Col>
        <Col xs={24} lg={12} key="cascader-m">
          <AppComponentCard
            title="Custom Field Names"
            component={CustomFieldNames}
            source={CustomFieldNamesSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Cascader;

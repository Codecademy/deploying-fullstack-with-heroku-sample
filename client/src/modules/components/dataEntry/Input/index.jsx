import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import ThreeSizesOfInput from "./ThreeSizesOfInput";
import ThreeSizesOfInputSource from "./ThreeSizesOfInput?raw";
import PostTab from "./PostTab";
import PostTabSource from "./PostTab?raw";
import SearchBox from "./SearchBox";
import SearchBoxSource from "./SearchBox?raw";
import InputGroups from "./InputGroups";
import InputGroupsSource from "./InputGroups?raw";
import AutosizingTheHeight from "./AutosizingTheHeight";
import AutosizingTheHeightSource from "./AutosizingTheHeight?raw";
import TextArea from "./TextAreas";
import TextAreaSource from "./TextAreas?raw";
import FormatTooltipInput from "./FormatTooltipInput";
import FormatTooltipInputSource from "./FormatTooltipInput?raw";
import Passwordbox from "./Passwordbox";
import PasswordboxSource from "./Passwordbox?raw";
import TextareaWithCharacterCounting from "./TextareaWithCharacterCounting";
import TextareaWithCharacterCountingSource from "./TextareaWithCharacterCounting?raw";
import Focus from "./Focus";
import FocusSource from "./Focus?raw";
import WithClearIcon from "./WithClearIcon";
import WithClearIconSource from "./WithClearIcon?raw";
import SearchBoxWithLoading from "./SearchBoxWithLoading";
import SearchBoxWithLoadingSource from "./SearchBoxWithLoading?raw";

const Input = () => {
  return (
    <>
      <AppComponentHeader
        title="Input"
        refUrl="https://ant.design/components/input/"
      />
      <AppRowContainer>
        <Col span={24} key="input-a">
          <AppComponentCard
            title="Input Groups"
            description="Input.Group example."
            component={InputGroups}
            source={InputGroupsSource}
          />
        </Col>
        <Col xs={24} lg={12} key="input-b">
          <AppComponentCard
            title="Basic"
            description="Basic usage example."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key="input-c">
          <AppComponentCard
            title="Three Sizes Of Input"
            description="There are three sizes of an Input box: large (40px), default (32px) and small (24px)."
            component={ThreeSizesOfInput}
            source={ThreeSizesOfInputSource}
          />
        </Col>
        <Col xs={24} lg={12} key="input-d">
          <AppComponentCard
            title="Search Box"
            description="Search when onSearch."
            component={SearchBox}
            source={SearchBoxSource}
          />
        </Col>
        <Col xs={24} lg={12} key="input-e">
          <AppComponentCard
            title="TextArea"
            description="For multi-line input."
            component={TextArea}
            source={TextAreaSource}
          />
        </Col>
        <Col xs={24} lg={12} key="input-f">
          <AppComponentCard
            title="Auto sizing The Height"
            description="autoSize prop for a textarea type of Input makes the height to automatically adjust based on the content. An option object can be provided to autoSize to specify the minimum and maximum number of lines the textarea will automatically adjust."
            component={AutosizingTheHeight}
            source={AutosizingTheHeightSource}
          />
        </Col>
        <Col xs={24} lg={12} key="input-g">
          <AppComponentCard
            title="Post Tab"
            description=" post tabs example."
            component={PostTab}
            source={PostTabSource}
          />
        </Col>
        <Col xs={24} lg={12} key="input-h">
          <AppComponentCard
            title="Format Tooltip Input"
            description="You can use the Input in conjunction with Tooltip component to create a Numeric Input, which can provide a good experience for extra-long content display."
            component={FormatTooltipInput}
            source={FormatTooltipInputSource}
          />
        </Col>
        <Col xs={24} lg={12} key="input-i">
          <AppComponentCard
            title="Password box"
            description="Input type of password."
            component={Passwordbox}
            source={PasswordboxSource}
          />
        </Col>
        <Col xs={24} lg={12} key="input-j">
          <AppComponentCard
            title="Textarea With Character Counting"
            description="Show character counting."
            component={TextareaWithCharacterCounting}
            source={TextareaWithCharacterCountingSource}
          />
        </Col>
        <Col xs={24} lg={12} key="input-k">
          <AppComponentCard
            title="Focus"
            description="Focus with additional option."
            component={Focus}
            source={FocusSource}
          />
        </Col>
        <Col xs={24} lg={12} key="input-l">
          <AppComponentCard
            title="With Clear Icon"
            description="Input box with the remove icon, click the icon to delete everything."
            component={WithClearIcon}
            source={WithClearIconSource}
          />
        </Col>
        <Col xs={24} lg={12} key="input-m">
          <AppComponentCard
            title="SearchBoxWithLoading"
            description="Search loading when onSearch."
            component={SearchBoxWithLoading}
            source={SearchBoxWithLoadingSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Input;

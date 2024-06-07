import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import DateFormat from "./DateFormat";
import DateFormatSource from "./DateFormat?raw";
import ThreeSizes from "./ThreeSizes";
import ThreeSizesSource from "./ThreeSizes?raw";
import ChooseTime from "./ChooseTime";
import ChooseTimeSource from "./ChooseTime?raw";
import Disabled from "./Disabled";
import DisabledSource from "./Disabled?raw";
import PresettedRanges from "./PresettedRanges";
import PresettedRangesSource from "./PresettedRanges?raw";
import CustomizedRangePicker from "./CustomizedRangePicker";
import CustomizedRangePickerSource from "./CustomizedRangePicker?raw";
import ControlledPanels from "./ControlledPanels";
import ControlledPanelsSource from "./ControlledPanels?raw";
import ExtraFooter from "./ExtraFooter";
import ExtraFooterSource from "./ExtraFooter?raw";
import CustomizedDateRendering from "./CustomizedDateRendering";
import CustomizedDateRenderingSource from "./CustomizedDateRendering?raw";
import SwitchablePicker from "./SwitchablePicker";
import SwitchablePickerSource from "./SwitchablePicker?raw";
import DisabledDateTime from "./DisabledDateTime";
import DisabledDateTimeSource from "./DisabledDateTime?raw";
import SelectRangeDatesIn7Days from "./SelectRangeDatesIn7Days";
import SelectRangeDatesIn7DaysSource from "./SelectRangeDatesIn7Days?raw";
import BorderedLess from "./BorderedLess";
import BorderedLessSource from "./BorderedLess?raw";

const DatePicker = () => {
  return (
    <>
      <AppComponentHeader
        title="Date Picker"
        refUrl="https://ant.design/components/date-picker/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="datepicker-a">
          <AppComponentCard
            title="Basic"
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key="datepicker-b">
          <AppComponentCard
            title="Date Format"
            component={DateFormat}
            source={DateFormatSource}
          />
        </Col>
        <Col xs={24} lg={12} key="datepicker-c">
          <AppComponentCard
            title="Three Sizes"
            component={ThreeSizes}
            source={ThreeSizesSource}
          />
        </Col>
        <Col xs={24} lg={12} key="datepicker-d">
          <AppComponentCard
            title="Extra Footer"
            component={ExtraFooter}
            source={ExtraFooterSource}
          />
        </Col>
        <Col xs={24} lg={12} key="datepicker-e">
          <AppComponentCard
            title="Disabled"
            component={Disabled}
            source={DisabledSource}
          />
        </Col>
        <Col xs={24} lg={12} key="datepicker-f">
          <AppComponentCard
            title="Disabled Date Time"
            component={DisabledDateTime}
            source={DisabledDateTimeSource}
          />
        </Col>

        <Col xs={24} lg={12} key="datepicker-g">
          <AppComponentCard
            title="Presetted Ranges"
            component={PresettedRanges}
            source={PresettedRangesSource}
          />
        </Col>
        <Col xs={24} lg={12} key="datepicker-h">
          <AppComponentCard
            title="Customized Date Rendering"
            component={CustomizedDateRendering}
            source={CustomizedDateRenderingSource}
          />
        </Col>
        <Col xs={24} lg={12} key="datepicker-i">
          <AppComponentCard
            title="Customized Range Picker"
            component={CustomizedRangePicker}
            source={CustomizedRangePickerSource}
          />
        </Col>
        <Col xs={24} lg={12} key="datepicker-j">
          <AppComponentCard
            title="Controlled Panels"
            component={ControlledPanels}
            source={ControlledPanelsSource}
          />
        </Col>
        <Col xs={24} lg={12} key="datepicker-k">
          <AppComponentCard
            title="Switchable Picker"
            component={SwitchablePicker}
            source={SwitchablePickerSource}
          />
        </Col>
        <Col xs={24} lg={12} key="datepicker-l">
          <AppComponentCard
            title="Select Range Dates In7Days"
            component={SelectRangeDatesIn7Days}
            source={SelectRangeDatesIn7DaysSource}
          />
        </Col>

        <Col xs={24} lg={12} key="datepicker-m">
          <AppComponentCard
            title="Choose Time"
            component={ChooseTime}
            source={ChooseTimeSource}
          />
        </Col>

        <Col xs={24} lg={12} key="datepicker-n">
          <AppComponentCard
            title="Bordered Less"
            component={BorderedLess}
            source={BorderedLessSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default DatePicker;

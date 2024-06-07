import React, { Component } from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import TimePickerSize from "./TimePickerSize";
import TimePickerSizeSource from "./TimePickerSize?raw";
import Disabled from "./Disabled";
import DisabledSource from "./Disabled?raw";
import IntervalOption from "./IntervalOption";
import IntervalOptionSource from "./IntervalOption?raw";
import Addon from "./Addon";
import AddonSource from "./Addon?raw";
import Hour from "./Hour";
import HourSource from "./Hour?raw";
import HourMinute from "./HourMinute";
import HourMinuteSource from "./HourMinute?raw";
import UnderControl from "./UnderControl";
import UnderControlSource from "./UnderControl?raw";
import BorderedLess from "./BorderedLess";
import BorderedLessSource from "./BorderedLess?raw";
import TimeRangePicker from "./TimeRangePicker";
import TimeRangePickerSource from "./TimeRangePicker?raw";

class TimePicker extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title="Time Picker"
          refUrl="https://ant.design/components/time-picker/"
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key="time-a">
            <AppComponentCard
              title="Basic"
              description="Click TimePicker, and then we could select or input a time in panel."
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key="time-b">
            <AppComponentCard
              title="Disabled"
              description="A disabled state of the TimePicker."
              component={Disabled}
              source={DisabledSource}
            />
          </Col>
          <Col xs={24} lg={12} key="time-c">
            <AppComponentCard
              title="Interval Option"
              description="Show stepped options by hourStep minuteStep secondStep."
              component={IntervalOption}
              source={IntervalOptionSource}
            />
          </Col>
          <Col xs={24} lg={12} key="time-d">
            <AppComponentCard
              title="Addon"
              description="Render addon contents to time picker panels bottom."
              component={Addon}
              source={AddonSource}
            />
          </Col>
          <Col xs={24} lg={12} key="time-e">
            <AppComponentCard
              title="Hour"
              description="A disabled state of the TimePicker."
              component={Hour}
              source={HourSource}
            />
          </Col>
          <Col xs={24} lg={12} key="time-f">
            <AppComponentCard
              title="Time Picker Size"
              description="The input box comes in three sizes. large is used in the form, while the medium size is the default."
              component={TimePickerSize}
              source={TimePickerSizeSource}
            />
          </Col>
          <Col xs={24} lg={12} key="time-g">
            <AppComponentCard
              title="Hour Minute"
              description="While part of format is omitted, the corresponding column in panel will disappear, too."
              component={HourMinute}
              source={HourMinuteSource}
            />
          </Col>
          <Col xs={24} lg={12} key="time-h">
            <AppComponentCard
              title="Under Control"
              description="value and onChange should be used together,"
              component={UnderControl}
              source={UnderControlSource}
            />
          </Col>
          <Col xs={24} lg={12} key="time-i">
            <AppComponentCard
              title="Bordered Less"
              description="Bordered-less style component."
              component={BorderedLess}
              source={BorderedLessSource}
            />
          </Col>
          <Col xs={24} lg={12} key="time-j">
            <AppComponentCard
              title="Time Range Picker"
              description="Use time range picker with TimePicker.RangePicker."
              component={TimeRangePicker}
              source={TimeRangePickerSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default TimePicker;

import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import NoticeCalendar from "./NoticeCalendar";
import NoticeCalendarSource from "./NoticeCalendar?raw";
import CalendarCard from "./CalendarCard";
import CalendarCardSource from "./CalendarCard?raw";
import SelectableCalendar from "./SelectableCalendar";
import SelectableCalendarSource from "./SelectableCalendar?raw";
import CustomHeader from "./CustomHeader";
import CustomHeaderSource from "./CustomHeader?raw";

const Calendar = () => {
  return (
    <>
      <AppComponentHeader
        title="Badge"
        refUrl="https://ant.design/components/badge/"
      />
      <AppRowContainer>
        <Col span={24} key="calendar-a">
          <AppComponentCard
            title="Notice Calendar"
            description="This component can be rendered by using dateCellRender and monthCellRender with the data you need."
            component={NoticeCalendar}
            source={NoticeCalendarSource}
          />
        </Col>
        <Col span={24} key="calendar-b">
          <AppComponentCard
            title="Basic"
            description="A basic calendar component with Year/Month switch."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col span={24} key="calendar-c">
          <AppComponentCard
            title="Selectable Calendar"
            description="A basic calendar component with Year/Month switch."
            component={SelectableCalendar}
            source={SelectableCalendarSource}
          />
        </Col>
        <Col span={24} key="calendar-d">
          <AppComponentCard
            title="Calendar Card"
            description="Nested inside a container element for rendering in limited space."
            component={CalendarCard}
            source={CalendarCardSource}
          />
        </Col>
        <Col span={24} key="calendar-e">
          <AppComponentCard
            title="Custom Header"
            description="Customize Calendar header content."
            component={CustomHeader}
            source={CustomHeaderSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Calendar;

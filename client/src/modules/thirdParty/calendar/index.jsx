import React from "react";

import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import Dnd from "./Dnd";
import DndSource from "./Dnd?raw";
import Timeslots from "./Timeslots";
import TimeslotsSource from "./Timeslots?raw";
import Popup from "./Popup";
import PopupSource from "./Popup?raw";
import Selectable from "./Selectable";
import SelectableSource from "./Selectable?raw";
import AppRowContainer from "@crema/components/AppRowContainer";
import { Col } from "antd";

const Calendar = () => {
  return (
    <>
      <AppComponentHeader
        title="React Big Calendar"
        refUrl="http://intljusticemission.github.io/react-big-calendar/examples/index.html#basic"
      />

      <AppRowContainer>
        <Col xs={24}>
          <AppComponentCard
            title="Basic Calendar"
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24}>
          <AppComponentCard
            title="Dnd Calendar"
            component={Dnd}
            source={DndSource}
          />
        </Col>

        <Col xs={24}>
          <AppComponentCard
            title="Timeslots Calendar"
            component={Timeslots}
            source={TimeslotsSource}
          />
        </Col>
        <Col xs={24}>
          <AppComponentCard
            title="Popup Calendar"
            component={Popup}
            source={PopupSource}
          />
        </Col>
        <Col xs={24}>
          <AppComponentCard
            title="Selectable Calendar"
            component={Selectable}
            source={SelectableSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Calendar;

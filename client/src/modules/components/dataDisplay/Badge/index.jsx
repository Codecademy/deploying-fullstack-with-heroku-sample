import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import StandAlone from "./StandAlone";
import StandAloneSource from "./StandAlone?raw";
import OverflowCount from "./OverflowCount";
import OverflowCountSource from "./OverflowCount?raw";
import Status from "./Status";
import StatusSource from "./Status?raw";
import Dynamic from "./Dynamic";
import DynamicSource from "./Dynamic?raw";
import RedBadge from "./RedBadge";
import RedBadgeSource from "./RedBadge?raw";
import Clickable from "./Clickable";
import ClickableSource from "./Clickable?raw";
import Size from "./Size";
import SizeSource from "./Size?raw";
import Offset from "./Offset";
import OffsetSource from "./Offset?raw";
import ColorfulBadge from "./ColorfulBadge";
import ColorfulBadgeSource from "./ColorfulBadge?raw";
import Riddon from "./Riddon";
import RiddonSource from "./Riddon?raw";

const Badge = () => {
  return (
    <>
      <AppComponentHeader
        title="Badge"
        refUrl="https://ant.design/components/badge/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="badge-a">
          <AppComponentCard
            title="Basic"
            description="Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key="badge-b">
          <AppComponentCard
            title="StandAlone"
            description="Used in standalone when children is empty."
            component={StandAlone}
            source={StandAloneSource}
          />
        </Col>
        <Col xs={24} lg={12} key="badge-c">
          <AppComponentCard
            title="Overflow Count"
            description="${overflowCount}+ is displayed when count is larger than overflowCount. The default value of overflowCount is 99."
            component={OverflowCount}
            source={OverflowCountSource}
          />
        </Col>
        <Col xs={24} lg={12} key="badge-d">
          <AppComponentCard
            title="Status"
            description="Standalone badge with status."
            component={Status}
            source={StatusSource}
          />
        </Col>

        <Col xs={24} lg={12} key="badge-f">
          <AppComponentCard
            title="Red Badge"
            description="This will simply display a red badge, without a specific count. If count equals 0, it wont display the dot."
            component={RedBadge}
            source={RedBadgeSource}
          />
        </Col>
        <Col xs={24} lg={12} key="badge-g">
          <AppComponentCard
            title="Clickable"
            description="The badge can be wrapped with a tag to make it linkable."
            component={Clickable}
            source={ClickableSource}
          />
        </Col>
        <Col xs={24} lg={12} key="badge-h">
          <AppComponentCard
            title="Size"
            description="Set size of numeral Badge."
            component={Size}
            source={SizeSource}
          />
        </Col>
        <Col xs={24} lg={12} key="badge-i">
          <AppComponentCard
            title="Offset"
            description="Set offset of the badge dot, the format is [left, top], which represents the offset of the status dot from the left and top of the default position."
            component={Offset}
            source={OffsetSource}
          />
        </Col>

        <Col xs={24} lg={12} key="badge-k">
          <AppComponentCard
            title="Colorful Badge"
            description="We preset a series of colorful Badge styles for use in different situations. You can also set it to a hex color string for custom color."
            component={ColorfulBadge}
            source={ColorfulBadgeSource}
          />
        </Col>
        <Col xs={24} lg={12} key="badge-l">
          <AppComponentCard
            title="Riddon"
            description="Use ribbon badge."
            component={Riddon}
            source={RiddonSource}
          />
        </Col>

        <Col xs={24} lg={12} key="badge-m">
          <AppComponentCard
            title="Dynamic"
            description="The count will be animated as it changes."
            component={Dynamic}
            source={DynamicSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Badge;

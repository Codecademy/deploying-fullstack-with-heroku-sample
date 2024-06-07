import React, { Component } from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import Placement from "./Placement";
import PlacementSource from "./Placement?raw";
import OtherElements from "./OtherElements";
import OtherElementsSource from "./OtherElements?raw";
import TriggerMode from "./TriggerMode";
import TriggerModeSource from "./TriggerMode?raw";
import ClickEvent from "./ClickEvent";
import ClickEventSource from "./ClickEvent?raw";
import ButtonWithDropdown from "./ButtonWithDropdown";
import ButtonWithDropdownSource from "./ButtonWithDropdown?raw";
import CascadingMenu from "./CascadingMenu";
import CascadingMenuSource from "./CascadingMenu?raw";
import HidingMenu from "./HidingMenu";
import HidingMenuSource from "./HidingMenu?raw";
import ContextMenu from "./ContextMenu";
import ContextMenuSource from "./ContextMenu?raw";

class index extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title="Dropdown"
          refUrl="https://ant.design/components/dropdown/"
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key="dropdown-a">
            <AppComponentCard
              title="Basic"
              description="The simplest usage."
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key="dropdown-b">
            <AppComponentCard
              title="Other Elements"
              description="Divider and disabled menu item."
              component={OtherElements}
              source={OtherElementsSource}
            />
          </Col>
          <Col xs={24} lg={12} key="dropdown-c">
            <AppComponentCard
              title="Trigger Mode"
              description="The default trigger mode is hover, you can change it to click."
              component={TriggerMode}
              source={TriggerModeSource}
            />
          </Col>
          <Col xs={24} lg={12} key="dropdown-d">
            <AppComponentCard
              title="Click Event"
              description="An event will be triggered when you click menu items, in which you can make different operations according to item's key."
              component={ClickEvent}
              source={ClickEventSource}
            />
          </Col>
          <Col xs={24} lg={12} key="dropdown-e">
            <AppComponentCard
              title="Placement"
              description="Support 6 placements."
              component={Placement}
              source={PlacementSource}
            />
          </Col>
          <Col xs={24} lg={12} key="dropdown-f">
            <AppComponentCard
              title="Button With Dropdown"
              description="A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right."
              component={ButtonWithDropdown}
              source={ButtonWithDropdownSource}
            />
          </Col>
          <Col xs={24} lg={12} key="dropdown-g">
            <AppComponentCard
              title="Cascading Menu"
              description="The menu has multiple levels."
              component={CascadingMenu}
              source={CascadingMenuSource}
            />
          </Col>
          <Col xs={24} lg={12} key="dropdown-h">
            <AppComponentCard
              title="Hiding Menu"
              description="The default is to close the menu when you click on menu items, this feature can be turned off."
              component={HidingMenu}
              source={HidingMenuSource}
            />
          </Col>
          <Col xs={24} lg={12} key="dropdown-i">
            <AppComponentCard
              title="Context Menu"
              description="The default trigger mode is hover, you can change it to contextMenu."
              component={ContextMenu}
              source={ContextMenuSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default index;

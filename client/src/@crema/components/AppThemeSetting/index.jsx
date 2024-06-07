import { useState } from "react";

import clsx from "clsx";
import IntlMessages from "@crema/helpers/IntlMessages";
import { CheckOutlined } from "@ant-design/icons";
import { LayoutDirection, LayoutType } from "@crema/constants/AppEnums";
import AppScrollbar from "../AppScrollbar";
import { FiSettings } from "react-icons/fi";
import { MdColorLens } from "react-icons/md";
import {
  useLayoutActionsContext,
  useLayoutContext,
} from "@crema/context/AppContextProvider/LayoutContextProvider";
import SidebarSettings from "./SidebarSettings";
import ThemeColors from "./ThemeColors";
import {
  StyledCustomizedHeader,
  StyledCustomizedItem,
  StyledCustomizedMain,
  StyledCustomizeDrawer,
  StyledCustomizedSwitch,
  StyledCustomizedSwitchView,
  StyledCustomizeNavOption,
  StyledCustomizeNavOptionContent,
  StyledCustomizeNavOptionItem,
  StyledCustomizeNavOptionRightIcon,
  StyledCustomizerButton,
  StyledCustomizerOption,
} from "./index.styled";
import AppGrid from "../AppGrid";
import MenuColorCell from "./SidebarSettings/MenuColorCell";
import {
  layoutTypes,
  navStyles,
  sidebarColors,
} from "@crema/mockapi/fakedb/navigationStyle";
import ThemeModes from "@crema/components/AppThemeSetting/ThemeModes/index.jsx";

const AppThemeSetting = () => {
  const [open, setCustomizerStatus] = useState(false);
  const [isColorSettingOpen, setColorSettingOpen] = useState(false);

  const {
    navStyle,
    direction,
    // footerType,
    footer,
    layoutType,
  } = useLayoutContext();

  const { setFooter, updateDirection, updateNavStyle, updateLayoutType } =
    useLayoutActionsContext();

  const onLayoutChange = (layoutType) => {
    updateLayoutType(layoutType);
  };
  const onNavStyleChange = (navStyle) => {
    updateNavStyle(navStyle);
  };

  const onChangeRtlSetting = (checked) => {
    updateDirection(checked ? LayoutDirection.RTL : LayoutDirection.LTR);
  };

  return (
    <StyledCustomizerOption>
      <StyledCustomizerButton onClick={() => setCustomizerStatus(!open)}>
        <FiSettings className="ant-spin-dot-spin" style={{ fontSize: 20 }} />
      </StyledCustomizerButton>
      <StyledCustomizerButton
        onClick={() => setColorSettingOpen(!isColorSettingOpen)}
      >
        <MdColorLens style={{ fontSize: 20 }} />
      </StyledCustomizerButton>
      <StyledCustomizeDrawer
        closable={false}
        title={
          <StyledCustomizedHeader>
            <h3>
              <IntlMessages id="customizer.customiseTheme" />
            </h3>
            <p>
              <IntlMessages id="customizer.customiseText" />
            </p>
          </StyledCustomizedHeader>
        }
        placement={direction === "ltr" ? "right" : "left"}
        className={clsx({
          boxedDrawer: layoutType === LayoutType.BOXED,
        })}
        open={open}
        onClose={() => setCustomizerStatus(false)}
      >
        <AppScrollbar>
          <StyledCustomizedMain>
            <SidebarSettings />

            <StyledCustomizedItem>
              <StyledCustomizedSwitchView>
                <h4>
                  <IntlMessages id="customizer.rtlSupport" />
                </h4>
                <StyledCustomizedSwitch
                  checked={direction === LayoutDirection.RTL}
                  onChange={onChangeRtlSetting}
                  value="checkedA"
                />
              </StyledCustomizedSwitchView>
            </StyledCustomizedItem>

            <StyledCustomizedItem>
              <h4>
                <IntlMessages id="customizer.navigationStyles" />
              </h4>
              <StyledCustomizeNavOption>
                {navStyles.map((navLayout) => {
                  return (
                    <StyledCustomizeNavOptionItem key={navLayout.id}>
                      <StyledCustomizeNavOptionContent
                        onClick={() => onNavStyleChange(navLayout.alias)}
                      >
                        <img src={navLayout.image} alt="nav" />
                        {navStyle === navLayout.alias ? (
                          <StyledCustomizeNavOptionRightIcon>
                            <CheckOutlined />
                          </StyledCustomizeNavOptionRightIcon>
                        ) : null}
                      </StyledCustomizeNavOptionContent>
                    </StyledCustomizeNavOptionItem>
                  );
                })}
              </StyledCustomizeNavOption>
            </StyledCustomizedItem>

            <StyledCustomizedItem>
              <h4>
                <IntlMessages id="customizer.layoutTypes" />
              </h4>
              <StyledCustomizeNavOption>
                {layoutTypes.map((layout) => {
                  return (
                    <StyledCustomizeNavOptionItem key={layout.id}>
                      <StyledCustomizeNavOptionContent
                        onClick={() => onLayoutChange(layout.alias)}
                      >
                        <img
                          className="layout-img"
                          src={layout.image}
                          alt="nav"
                        />
                        {layoutType === layout.alias ? (
                          <StyledCustomizeNavOptionRightIcon>
                            <CheckOutlined />
                          </StyledCustomizeNavOptionRightIcon>
                        ) : null}
                      </StyledCustomizeNavOptionContent>
                    </StyledCustomizeNavOptionItem>
                  );
                })}
              </StyledCustomizeNavOption>
            </StyledCustomizedItem>

            <StyledCustomizedItem>
              <StyledCustomizedSwitchView>
                <h4>Footer</h4>
                <StyledCustomizedSwitch
                  checked={footer}
                  onChange={(value) => setFooter(value)}
                  value="checkedA"
                />
              </StyledCustomizedSwitchView>
            </StyledCustomizedItem>

            {/*
            <div className='customize-item'>
              <h4>Footer Type</h4>
              <Select className='customize-select-box'>
                <Option value={FooterType.FIXED}>Fixed</Option>
                <Option value={FooterType.FLUID}>Fluid</Option>
              </Select>
            </div>*/}
          </StyledCustomizedMain>
        </AppScrollbar>
      </StyledCustomizeDrawer>
      <StyledCustomizeDrawer
        closable={false}
        title={
          <StyledCustomizedHeader>
            <h3>
              <IntlMessages id="customizer.customiseSidebar" />
            </h3>
            <p>
              <IntlMessages id="customizer.customiseSidebarText" />
            </p>
          </StyledCustomizedHeader>
        }
        placement={direction === "ltr" ? "right" : "left"}
        className={clsx({
          boxedDrawer: layoutType === LayoutType.BOXED,
        })}
        open={isColorSettingOpen}
        onClose={() => setColorSettingOpen(false)}
      >
        <AppScrollbar>
          <StyledCustomizedMain>
            <StyledCustomizedItem>
              <ThemeModes />
              <h4>Sidebar Colors</h4>
              <AppGrid
                data={sidebarColors}
                column={2}
                itemPadding={5}
                renderItem={(colorSet, index) => (
                  <MenuColorCell key={index} sidebarColors={colorSet} />
                )}
              />
            </StyledCustomizedItem>
            <StyledCustomizedItem>
              <ThemeColors />
            </StyledCustomizedItem>
          </StyledCustomizedMain>
        </AppScrollbar>
      </StyledCustomizeDrawer>
    </StyledCustomizerOption>
  );
};

export default AppThemeSetting;

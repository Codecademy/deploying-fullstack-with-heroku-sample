import React from "react";
import PropTypes from "prop-types";
import PropsTypes from "prop-types";
import UserInfo from "../components/UserInfo";
import clsx from "clsx";
import AppVerticalMenu from "../components/AppVerticalNav";
import { useSidebarContext } from "@crema/context/AppContextProvider/SidebarContextProvider";
import {
  StyledAppMainSidebar,
  StyledAppSidebarScrollbar,
} from "./index.styled";

const AppSidebar = ({ isCollapsed, routesConfig }) => {
  const { allowSidebarBgImage } = useSidebarContext();

  return (
    <StyledAppMainSidebar
      className={clsx({
        "sidebar-img-background": allowSidebarBgImage,
      })}
      collapsible
      breakpoint="xl"
      collapsed={isCollapsed}
    >
      <UserInfo hasColor />
      <StyledAppSidebarScrollbar scrollToTop={false}>
        <AppVerticalMenu routesConfig={routesConfig} />
      </StyledAppSidebarScrollbar>
    </StyledAppMainSidebar>
  );
};

export default AppSidebar;

AppSidebar.propTypes = {
  routesConfig: PropsTypes.array.isRequired,
  isCollapsed: PropTypes.bool,
};

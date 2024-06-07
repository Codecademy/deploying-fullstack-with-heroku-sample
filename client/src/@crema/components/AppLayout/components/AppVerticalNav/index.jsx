import { useEffect, useState } from "react";
import { getRouteMenus } from "./VerticalMenuUtils";
import clsx from "clsx";
import defaultConfig from "@crema/constants/defaultConfig";
import { useSidebarContext } from "@crema/context/AppContextProvider/SidebarContextProvider";
import { MenuStyle } from "@crema/constants/AppEnums";
import { StyledVerticalNav } from "./index.styled";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const AppVerticalNav = ({ routesConfig }) => {
  const { menuStyle, sidebarColorSet } = useSidebarContext();
  const { pathname } = useLocation();
  const selectedKeys = pathname.substr(1);
  const [openKeys, setOpenKeys] = useState([selectedKeys[0]]);

  const defaultOpenKeys = selectedKeys.split("/")[1];
  useEffect(() => {
    setOpenKeys([selectedKeys[selectedKeys.length - 2]]);
  }, []);

  useEffect(() => {
    if (pathname && document.getElementById(pathname)) {
      setTimeout(() => {
        document
          .getElementById(pathname)
          .scrollIntoView({ behavior: "smooth", block: "center" });
      }, 1);
    }
  }, [pathname]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };
  return (
    <StyledVerticalNav
      theme={sidebarColorSet.mode}
      color={sidebarColorSet.sidebarMenuSelectedTextColor}
      bgcolor={sidebarColorSet.sidebarMenuSelectedBgColor}
      mode="inline"
      className={clsx({
        "menu-rounded": menuStyle === MenuStyle.ROUNDED,
        "menu-rounded rounded-menu-reverse":
          menuStyle === MenuStyle.ROUNDED_REVERSE,
        "menu-rounded standard-menu": menuStyle === MenuStyle.STANDARD,
        "menu-rounded curved-menu": menuStyle === MenuStyle.CURVED_MENU,
        "bg-color-menu":
          sidebarColorSet.sidebarBgColor !==
          defaultConfig.sidebar.colorSet.sidebarBgColor,
      })}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      selectedKeys={selectedKeys.split("/")}
      defaultOpenKeys={[defaultOpenKeys]} /*
      selectedKeys={[selectedKeys[selectedKeys.length - 1]]}
      defaultSelectedKeys={[selectedKeys[selectedKeys.length - 1]]}*/
      items={getRouteMenus(routesConfig)}
    />
  );
};

export default AppVerticalNav;
AppVerticalNav.propTypes = {
  routesConfig: PropTypes.array.isRequired,
};

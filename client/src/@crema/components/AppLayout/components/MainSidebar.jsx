import React from 'react';
import { Layout } from 'antd';
import { ThemeMode } from '@crema/constants/AppEnums';
import { useThemeContext } from '@crema/context/AppContextProvider/ThemeContextProvider';
import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';
import PropTypes from 'prop-types';

const { Sider } = Layout;

const MainSidebar = ({ children, className, collapsed = false, ...props }) => {
  const { themeMode } = useThemeContext();
  const { sidebarColorSet, allowSidebarBgImage, sidebarBgImageId } =
    useSidebarContext();

  return (
    <Sider
      theme={themeMode === ThemeMode.LIGHT ? ThemeMode.LIGHT : ThemeMode.DARK}
      breakpoint='lg'
      className={className}
      style={{
        backgroundColor: sidebarColorSet.sidebarBgColor,
        color: sidebarColorSet.sidebarTextColor,
        backgroundImage: allowSidebarBgImage
          ? `url(/assets/images/sidebar/images/${sidebarBgImageId}.png)`
          : '',
      }}
      collapsed={collapsed}
      {...props}
    >
      {children}
    </Sider>
  );
};

export default MainSidebar;
MainSidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any,
  collapsed: PropTypes.bool,
};

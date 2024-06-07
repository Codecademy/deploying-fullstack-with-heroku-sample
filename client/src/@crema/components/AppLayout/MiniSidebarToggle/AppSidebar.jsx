import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from '../components/UserInfo';
import clsx from 'clsx';
import AppVerticalMenu from '../components/AppVerticalNav';
import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';
import {
  StyledMiniSidebarScrollbar,
  StyledMiniSidebarToggle,
} from './index.styled';

const AppSidebar = ({ isCollapsed, routesConfig }) => {
  const { allowSidebarBgImage } = useSidebarContext();

  return (
    <StyledMiniSidebarToggle
      className={clsx({
        'mini-sidebar-toggle-img-background': allowSidebarBgImage,
      })}
      collapsible
      breakpoint='xl'
      collapsedWidth='0'
      collapsed={isCollapsed}
    >
      <UserInfo hasColor />
      <StyledMiniSidebarScrollbar scrollToTop={false}>
        <AppVerticalMenu routesConfig={routesConfig} />
      </StyledMiniSidebarScrollbar>
    </StyledMiniSidebarToggle>
  );
};

export default AppSidebar;

AppSidebar.propTypes = {
  isCollapsed: PropTypes.bool,
  routesConfig: PropTypes.array,
};

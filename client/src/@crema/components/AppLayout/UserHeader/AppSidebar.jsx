import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import AppVerticalMenu from '../components/AppVerticalNav';
import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';
import {
  StyledUserHeaderSidebar,
  StyledUserSidebarScrollbar,
} from './index.styled';

const AppSidebar = ({ isCollapsed, routesConfig }) => {
  const { allowSidebarBgImage } = useSidebarContext();

  return (
    <StyledUserHeaderSidebar
      className={clsx({
        'userHeader-sidebar-img-background': allowSidebarBgImage,
      })}
      collapsible
      breakpoint='xl'
      collapsed={isCollapsed}
    >
      <StyledUserSidebarScrollbar scrollToTop={false}>
        <AppVerticalMenu routesConfig={routesConfig} />
      </StyledUserSidebarScrollbar>
    </StyledUserHeaderSidebar>
  );
};

export default AppSidebar;

AppSidebar.propTypes = {
  isCollapsed: PropTypes.bool,
  routesConfig: PropTypes.array,
};

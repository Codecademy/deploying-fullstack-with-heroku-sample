import React from 'react';
import collapseMotion from 'antd/lib/_util/motion';
import UserInfo from '../components/UserInfo';
import clsx from 'clsx';
import AppVerticalMenu from '../components/AppVerticalNav';
import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';
import {
  StyledAppSidebarMiniScrollbar,
  StyledMiniSidebar,
} from './index.styled';
import PropTypes from 'prop-types';

const AppSidebar = ({ routesConfig }) => {
  const { allowSidebarBgImage } = useSidebarContext();

  return (
    <StyledMiniSidebar
      breakpoint='lg'
      className={clsx({
        'mini-sidebar-img-background': allowSidebarBgImage,
      })}
      collapsed={collapseMotion}
    >
      <UserInfo hasColor />
      <StyledAppSidebarMiniScrollbar scrollToTop={false}>
        <AppVerticalMenu routesConfig={routesConfig} />
      </StyledAppSidebarMiniScrollbar>
    </StyledMiniSidebar>
  );
};

export default AppSidebar;
AppSidebar.propTypes = {
  routesConfig: PropTypes.array.isRequired,
};

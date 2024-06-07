import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PropsTypes from 'prop-types';
import UserInfo from '../components/UserInfo';
import clsx from 'clsx';
import AppVerticalMenu from '../components/AppVerticalNav';
import { useLocation } from 'react-router-dom';
import { LayoutDirection } from '@crema/constants/AppEnums';
import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';
import { useLayoutContext } from '@crema/context/AppContextProvider/LayoutContextProvider';
import {
  StyledAppDrawer,
  StyledAppDrawerLayoutSidebar,
  StyledAppDrawerSidebarScrollbar,
} from './index.styled';

const AppSidebar = ({ visible, onClose }) => {
  const { allowSidebarBgImage } = useSidebarContext();
  const { direction } = useLayoutContext();
  const { pathname } = useLocation();

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <StyledAppDrawer
      placement={direction === LayoutDirection.LTR ? 'left' : 'right'}
      closable={false}
      onClose={onClose}
      open={visible}
    >
      <StyledAppDrawerLayoutSidebar
        className={clsx({
          'drawerLayout-sidebar-img-background': allowSidebarBgImage,
        })}
        collapsible
      >
        <UserInfo hasColor />
        <StyledAppDrawerSidebarScrollbar scrollToTop={false}>
          <AppVerticalMenu />
        </StyledAppDrawerSidebarScrollbar>
      </StyledAppDrawerLayoutSidebar>
    </StyledAppDrawer>
  );
};

export default AppSidebar;

AppSidebar.propTypes = {
  routesConfig: PropsTypes.array.isRequired,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

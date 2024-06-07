import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PropsTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import UserInfo from '../components/UserInfo';
import clsx from 'clsx';
import AppVerticalMenu from '../components/AppVerticalNav';
import { LayoutDirection } from '@crema/constants/AppEnums';
import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';
import { useLayoutContext } from '@crema/context/AppContextProvider/LayoutContextProvider';
import {
  StyledAppHorDrawer,
  StyledAppSidebarHorScrollbar,
  StyledHorMainSidebar,
} from './index.styled';

const AppSidebar = ({ visible, onClose, routesConfig }) => {
  const { allowSidebarBgImage } = useSidebarContext();
  const { direction } = useLayoutContext();
  const { pathname } = useLocation();

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <StyledAppHorDrawer
      placement={direction === LayoutDirection.LTR ? 'left' : 'right'}
      closable={false}
      onClose={onClose}
      open={visible}
    >
      <StyledHorMainSidebar
        className={clsx({
          'hor-sidebar-img-background': allowSidebarBgImage,
        })}
        collapsible
      >
        <UserInfo />
        <StyledAppSidebarHorScrollbar scrollToTop={false}>
          <AppVerticalMenu routesConfig={routesConfig} />
        </StyledAppSidebarHorScrollbar>
      </StyledHorMainSidebar>
    </StyledAppHorDrawer>
  );
};

export default AppSidebar;

AppSidebar.propTypes = {
  visible: PropTypes.bool,
  routesConfig: PropsTypes.array.isRequired,
  onClose: PropTypes.func,
};

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
  StyledAppHorDarkDrawer,
  StyledAppMainHorDarkSidebar,
  StyledAppScrollbar,
} from './index.styled';

const AppSidebar = ({ visible, onClose, routesConfig }) => {
  const { allowSidebarBgImage } = useSidebarContext();
  const { direction } = useLayoutContext();
  const { pathname } = useLocation();

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <StyledAppHorDarkDrawer
      placement={direction === LayoutDirection.LTR ? 'left' : 'right'}
      closable={false}
      onClose={onClose}
      open={visible}
    >
      <StyledAppMainHorDarkSidebar
        className={clsx({
          'hor-dark-sidebar-img-background': allowSidebarBgImage,
        })}
        collapsible
      >
        <UserInfo />
        <StyledAppScrollbar scrollToTop={false}>
          <AppVerticalMenu routesConfig={routesConfig} />
        </StyledAppScrollbar>
      </StyledAppMainHorDarkSidebar>
    </StyledAppHorDarkDrawer>
  );
};

export default AppSidebar;

AppSidebar.propTypes = {
  routesConfig: PropsTypes.array.isRequired,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

import React from 'react';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import AppContentView from '../../AppContentView';
import AppThemeSetting from '../../AppThemeSetting';
import clsx from 'clsx';
import { FooterType, LayoutType } from '@crema/constants/AppEnums';
import AppFooter from '../components/AppFooter';
import { useLayoutContext } from '@crema/context/AppContextProvider/LayoutContextProvider';
import {
  StyledAppLayoutMinibar,
  StyledAppLayoutMinibarMain,
  StyledUserMiniHeaderScrollbar,
} from './index.styled';
import PropsTypes from 'prop-types';

const UserMiniHeader = ({ routes, routesConfig }) => {
  const { footer, layoutType, footerType } = useLayoutContext();

  return (
    <StyledAppLayoutMinibar
      className={clsx({
        appMainFooter: footer && footerType === FooterType.FLUID,
        appMainFixedFooter: footer && footerType === FooterType.FIXED,
        boxedLayout: layoutType === LayoutType.BOXED,
      })}
    >
      <AppSidebar routesConfig={routesConfig} />
      <StyledAppLayoutMinibarMain className='app-layout-userMiniHeader-main'>
        <AppHeader />
        <StyledUserMiniHeaderScrollbar>
          <AppContentView routes={routes} />
          <AppFooter />
        </StyledUserMiniHeaderScrollbar>
      </StyledAppLayoutMinibarMain>
      <AppThemeSetting />
    </StyledAppLayoutMinibar>
  );
};

export default UserMiniHeader;
UserMiniHeader.propTypes = {
  routes: PropsTypes.object.isRequired,
  routesConfig: PropsTypes.array.isRequired,
};

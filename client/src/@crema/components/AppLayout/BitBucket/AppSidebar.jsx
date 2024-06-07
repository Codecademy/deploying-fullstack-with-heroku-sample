import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UserInfo from '../components/UserInfo';
import clsx from 'clsx';
import BucketMinibar from './BucketMinibar';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import AppVerticalMenu from '../components/AppVerticalNav';
import { useLocation } from 'react-router-dom';
import { LayoutDirection } from '@crema/constants/AppEnums';
import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';
import { useLayoutContext } from '@crema/context/AppContextProvider/LayoutContextProvider';
import {
  StyledAppBitbucketDrawer,
  StyledAppBitbucketScrollbar,
  StyledAppBitbucketSidebar,
  StyledAppBitbucketSidebarWrapper,
  StyledBitbucketBtn,
} from './index.styled';

const AppSidebar = ({ visible, onClose, routesConfig }) => {
  const { allowSidebarBgImage } = useSidebarContext();
  const { direction } = useLayoutContext();
  const { pathname } = useLocation();

  useEffect(() => {
    onClose();
  }, [pathname]);

  const [isSidebarClosed, setSidebarClosed] = useState(false);

  const onSidebarClosed = () => {
    setSidebarClosed(!isSidebarClosed);
  };

  const sideBarComponent = () => {
    return (
      <StyledAppBitbucketSidebar
        className={clsx('app-BitBucket-sidebar', {
          'bitBucket-sidebar-img-background': allowSidebarBgImage,
        })}
        collapsible
      >
        <UserInfo hasColor />
        <StyledAppBitbucketScrollbar scrollToTop={false}>
          <AppVerticalMenu routesConfig={routesConfig} />
        </StyledAppBitbucketScrollbar>
      </StyledAppBitbucketSidebar>
    );
  };

  return (
    <>
      <StyledAppBitbucketDrawer
        placement={direction === LayoutDirection.LTR ? 'left' : 'right'}
        closable={false}
        onClose={onClose}
        open={visible}
      >
        <StyledAppBitbucketSidebarWrapper className='app-BitBucket-sidebar-wrapper'>
          <BucketMinibar />
          {sideBarComponent()}
        </StyledAppBitbucketSidebarWrapper>
      </StyledAppBitbucketDrawer>
      <StyledAppBitbucketSidebarWrapper
        className={clsx('app-BitBucket-sidebar-wrapper', {
          'app-BitBucket-sidebar-wrapper-close': isSidebarClosed,
        })}
      >
        <BucketMinibar />
        {sideBarComponent()}
        <StyledBitbucketBtn onClick={onSidebarClosed}>
          {isSidebarClosed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
        </StyledBitbucketBtn>
      </StyledAppBitbucketSidebarWrapper>
    </>
  );
};

export default AppSidebar;

AppSidebar.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  routesConfig: PropTypes.array,
};

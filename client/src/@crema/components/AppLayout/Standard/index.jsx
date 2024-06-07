import React, { useEffect, useState } from 'react';
import { Grid } from 'antd';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import AppContentView from '../../AppContentView';
import AppThemeSetting from '../../AppThemeSetting';
import AppFooter from '../components/AppFooter';
import clsx from 'clsx';
import { FooterType } from '@crema/constants/AppEnums';
import { isEmpty } from '@crema/helpers/Common';
import { useLayoutContext } from '@crema/context/AppContextProvider/LayoutContextProvider';
import {
  StyledAppLayoutStandard,
  StyledAppLayoutStandardMain,
  StyledAppLayoutStandardRow,
  StyledStandardScrollbar,
} from './index.styled';
import PropsTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const { useBreakpoint } = Grid;

const Standard = ({ routes, routesConfig }) => {
  const width = useBreakpoint();
  const { pathname } = useLocation();
  const [isCollapsed, setCollapsed] = useState(false);
  const { footer, footerType } = useLayoutContext();

  useEffect(() => {
    if (isCollapsed) setCollapsed(!isCollapsed);
  }, [pathname]);

  const onToggleSidebar = () => {
    setCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (!isEmpty(width)) {
      if (width.xl) {
        setCollapsed(false);
      } else {
        setCollapsed(true);
      }
    }
  }, [width]);

  return (
    <StyledAppLayoutStandard
      className={clsx({
        appMainFooter: footer && footerType === FooterType.FLUID,
        appMainFixedFooter: footer && footerType === FooterType.FIXED,
      })}
    >
      <AppHeader isCollapsed={isCollapsed} onToggleSidebar={onToggleSidebar} />
      <StyledAppLayoutStandardRow>
        <AppSidebar isCollapsed={isCollapsed} routesConfig={routesConfig} />
        <StyledAppLayoutStandardMain className='app-layout-standard-main'>
          <StyledStandardScrollbar>
            <AppContentView routes={routes} />
            <AppFooter />
          </StyledStandardScrollbar>
        </StyledAppLayoutStandardMain>
      </StyledAppLayoutStandardRow>
      <AppThemeSetting />
    </StyledAppLayoutStandard>
  );
};

export default Standard;
Standard.propTypes = {
  routes: PropsTypes.object.isRequired,
  routesConfig: PropsTypes.array.isRequired,
};

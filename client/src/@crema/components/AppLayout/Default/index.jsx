import  { useEffect, useState } from 'react';
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
  StyledAppLayout,
  StyledAppLayoutMain,
  StyledMainScrollbar,
} from './index.styled';
import PropsTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const { useBreakpoint } = Grid;

const Default = ({ routesConfig, routes }) => {
  const width = useBreakpoint();
  const { pathname } = useLocation();
  const [isCollapsed, setCollapsed] = useState(false);
  const { footer, footerType } = useLayoutContext();

  const onToggleSidebar = () => {
    setCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (isCollapsed) setCollapsed(!isCollapsed);
  }, [pathname]);

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
    <StyledAppLayout
      className={clsx({
        appMainFooter: footer && footerType === FooterType.FLUID,
        appMainFixedFooter: footer && footerType === FooterType.FIXED,
      })}
    >
      <AppSidebar isCollapsed={isCollapsed} routesConfig={routesConfig} />
      <StyledAppLayoutMain className='app-layout-main'>
        <AppHeader
          isCollapsed={isCollapsed}
          onToggleSidebar={onToggleSidebar}
        />
        <StyledMainScrollbar>
          <AppContentView routes={routes} />
          <AppFooter />
        </StyledMainScrollbar>
      </StyledAppLayoutMain>
      <AppThemeSetting />
    </StyledAppLayout>
  );
};

export default Default;
Default.propTypes = {
  routesConfig: PropsTypes.array.isRequired,
  routes: PropsTypes.object.isRequired,
};

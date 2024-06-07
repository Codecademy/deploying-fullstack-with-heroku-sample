import React, { useEffect, useState } from 'react';
import AppHeader from './AppHeader';
import AppContentView from '../../AppContentView';
import AppThemeSetting from '../../AppThemeSetting';
import AppFooter from '../components/AppFooter';
import clsx from 'clsx';
import { FooterType, LayoutType } from '@crema/constants/AppEnums';
import AppSidebar from './AppSidebar';
import { useLayoutContext } from '@crema/context/AppContextProvider/LayoutContextProvider';
import {
  StyledAppLayoutHor,
  StyledAppLayoutHorMain,
  StyledContainer,
} from './index.styled';
import PropsTypes from 'prop-types';

const HorDefault = ({ routes, routesConfig }) => {
  const [isVisible, setVisible] = useState(false);
  const { footer, footerType, layoutType } = useLayoutContext();

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (layoutType === LayoutType.FRAMED) {
      document.body.classList.add('framedHorLayout');
    } else {
      document.body.classList.remove('framedHorLayout');
    }
  }, [layoutType]);

  return (
    <StyledAppLayoutHor
      className={clsx({
        appMainFooter: footer && footerType === FooterType.FLUID,
        appMainFixedFooter: footer && footerType === FooterType.FIXED,
      })}
    >
      <AppSidebar
        visible={isVisible}
        onClose={onClose}
        routesConfig={routesConfig}
      />
      <AppHeader showDrawer={showDrawer} routesConfig={routesConfig} />
      <StyledAppLayoutHorMain>
        <StyledContainer>
          <AppContentView routes={routes} />
          <AppFooter />
        </StyledContainer>
      </StyledAppLayoutHorMain>
      <AppThemeSetting />
    </StyledAppLayoutHor>
  );
};

export default HorDefault;
HorDefault.propTypes = {
  routes: PropsTypes.object.isRequired,
  routesConfig: PropsTypes.array.isRequired,
};

import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import { menuStyles } from '@crema/mockapi/fakedb/navigationStyle';
import {
  useSidebarActionsContext,
  useSidebarContext,
} from '@crema/context/AppContextProvider/SidebarContextProvider';
import AppSelectedIcon from '../../../AppSelectedIcon';
import { StyledCustomizedItem } from '../../index.styled';
import {
  StyledNavMenu,
  StyledNavMenuItem,
  StyledNavMenuItemCur,
} from './index.styled';

const NavMenuStyle = () => {
  const { menuStyle } = useSidebarContext();

  const { updateMenuStyle } = useSidebarActionsContext();
  const onMenuStyleChange = (menuStyle) => {
    updateMenuStyle(menuStyle);
  };

  return (
    <StyledCustomizedItem>
      <h3>
        <IntlMessages id='customizer.sidebarSettings' />
      </h3>
      <StyledCustomizedItem>
        <h4>
          <IntlMessages id='customizer.menuStyle' />
        </h4>
        <StyledNavMenu style={{}}>
          {menuStyles.map((menu) => {
            return (
              <StyledNavMenuItem style={{}} key={menu.id}>
                <StyledNavMenuItemCur
                  onClick={() => onMenuStyleChange(menu.alias)}
                >
                  <img src={menu.image} alt='nav' />
                  {menuStyle === menu.alias ? <AppSelectedIcon /> : null}
                </StyledNavMenuItemCur>
              </StyledNavMenuItem>
            );
          })}
        </StyledNavMenu>
      </StyledCustomizedItem>
    </StyledCustomizedItem>
  );
};

export default NavMenuStyle;

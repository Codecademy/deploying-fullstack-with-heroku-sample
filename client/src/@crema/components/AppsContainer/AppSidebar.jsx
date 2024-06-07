import React from 'react';
import PropTypes from 'prop-types';
import { LayoutDirection } from '@crema/constants/AppEnums';
import { useLayoutContext } from '@crema/context/AppContextProvider/LayoutContextProvider';
import {
  StyledAppSidebar,
  StyledAppSidebarCard,
  StyledAppSidebarDrawer,
} from './index.styled';

const AppSidebar = (props) => {
  const { isAppDrawerOpen, setAppDrawerOpen, sidebarContent, title } = props;
  const { direction } = useLayoutContext();

  return (
    <StyledAppSidebar>
      <StyledAppSidebarDrawer
        title={title}
        placement={direction === LayoutDirection.LTR ? 'left' : 'right'}
        open={isAppDrawerOpen}
        onClose={() => setAppDrawerOpen(!isAppDrawerOpen)}
      >
        {sidebarContent}
      </StyledAppSidebarDrawer>
      <StyledAppSidebarCard style={{ borderRadius: 16 }}>
        {sidebarContent}
      </StyledAppSidebarCard>
    </StyledAppSidebar>
  );
};

export default AppSidebar;
AppSidebar.propTypes = {
  setAppDrawerOpen: PropTypes.func,
  sidebarContent: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isAppDrawerOpen: PropTypes.bool,
};

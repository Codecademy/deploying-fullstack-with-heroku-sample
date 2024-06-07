import React from 'react';
import PropTypes from 'prop-types';
import ThemeContextProvider from './ThemeContextProvider';
import LocaleContextProvider from './LocaleContextProvider';
import LayoutContextProvider from './LayoutContextProvider';
import SidebarContextProvider from './SidebarContextProvider';
import InfoViewContextProvider from './InfoViewContextProvider';

const AppContextProvider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <LocaleContextProvider>
        <InfoViewContextProvider>
          <LayoutContextProvider>
            <SidebarContextProvider>{children}</SidebarContextProvider>
          </LayoutContextProvider>
        </InfoViewContextProvider>
      </LocaleContextProvider>
    </ThemeContextProvider>
  );
};

export default AppContextProvider;

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import defaultConfig from '@crema/constants/defaultConfig';

const SidebarContext = createContext();
const SidebarActionsContext = createContext();

export const useSidebarContext = () => useContext(SidebarContext);

export const useSidebarActionsContext = () => useContext(SidebarActionsContext);

const SidebarContextProvider = ({ children }) => {
  const [menuStyle, updateMenuStyle] = useState(
    defaultConfig.sidebar.menuStyle,
  );
  const [sidebarColorSet, updateSidebarColorSet] = useState(
    defaultConfig.sidebar.colorSet,
  );
  const [allowSidebarBgImage, setSidebarBgImage] = useState(
    defaultConfig.sidebar.allowSidebarBgImage,
  );
  const [sidebarBgImageId, updateSidebarBgImage] = useState(
    defaultConfig.sidebar.sidebarBgImageId,
  );

  return (
    <SidebarContext.Provider
      value={{
        menuStyle,
        sidebarColorSet,
        allowSidebarBgImage,
        sidebarBgImageId,
      }}
    >
      <SidebarActionsContext.Provider
        value={{
          updateMenuStyle,
          updateSidebarColorSet,
          setSidebarBgImage,
          updateSidebarBgImage,
        }}
      >
        {children}
      </SidebarActionsContext.Provider>
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;

SidebarContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

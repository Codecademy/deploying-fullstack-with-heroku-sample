import React from 'react';
import { Menu } from 'antd';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getRouteHorMenus } from './HorizontalMenuUtils';

const AppHorizontalNav = ({ className, routesConfig }) => {
  const { pathname } = useLocation();

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[0];
  return (
    <Menu
      mode='horizontal'
      className={className}
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys.replaceAll('/', ':')]}
    >
      {getRouteHorMenus(routesConfig)}
    </Menu>
  );
};

export default AppHorizontalNav;
AppHorizontalNav.propTypes = {
  className: PropTypes.string,
  routesConfig: PropTypes.array.isRequired,
};

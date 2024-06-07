import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';

const MenuLevel = React.lazy(() => import('./MenuLevel'));

export const menuLevelConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/menu-level/level-1',
    element: <MenuLevel />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/menu-level/level-2/level-2-1',
    element: <MenuLevel />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/menu-level/level-2/level-2-2',
    element: <MenuLevel />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/menu-level/level-3/level-3-1-1',
    element: <MenuLevel />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/menu-level/level-3/level-3-1-2',
    element: <MenuLevel />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/menu-level/level-3/level-3-2-1',
    element: <MenuLevel />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/menu-level/level-3/level-3-2-2',
    element: <MenuLevel />,
  },
];

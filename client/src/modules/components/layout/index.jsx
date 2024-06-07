import React from 'react';

const Divider = React.lazy(() => import('./Divider'));
const Space = React.lazy(() => import('./Space'));
export const layoutComponentConfigs = [
  {
    path: '/components/layout/divider',
    element: <Divider />,
  },
  {
    path: '/components/layout/space',
    element: <Space />,
  },
];

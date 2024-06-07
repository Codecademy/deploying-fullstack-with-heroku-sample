import React from 'react';

const Anchor = React.lazy(() => import('./Anchor'));
const FloatButton = React.lazy(() => import('./BackTop'));
const Divider = React.lazy(() => import('./Divider'));
const ConfigProvider = React.lazy(() => import('./ConfigProvider'));

export const otherComponentConfigs = [
  {
    path: '/components/other/anchor',
    element: <Anchor />,
  },
  {
    path: '/components/other/backtop',
    element: <FloatButton />,
  },
  {
    path: '/components/other/divider',
    element: <Divider />,
  },
  {
    path: '/components/other/config-provider',
    element: <ConfigProvider />,
  },
];

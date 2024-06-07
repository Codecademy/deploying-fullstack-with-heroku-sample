import React from 'react';

const Affix = React.lazy(() => import('./Affix'));
const Breadcrumb = React.lazy(() => import('./Breadcrumb'));
const Dropdown = React.lazy(() => import('./Dropdown'));
const Menu = React.lazy(() => import('./Menu'));
const Pagination = React.lazy(() => import('./Pagination'));
const PageHeader = React.lazy(() => import('./PageHeader'));
const Steps = React.lazy(() => import('./Steps'));

export const navigationComponentConfigs = [
  {
    path: '/components/navigation/affix',
    element: <Affix />,
  },
  {
    path: '/components/navigation/breadcrumb',
    element: <Breadcrumb />,
  },
  {
    path: '/components/navigation/dropdown',
    element: <Dropdown />,
  },
  {
    path: '/components/navigation/menu',
    element: <Menu />,
  },
  {
    path: '/components/navigation/pagination',
    element: <Pagination />,
  },
  {
    path: '/components/navigation/page-header',
    element: <PageHeader />,
  },
  {
    path: '/components/navigation/steps',
    element: <Steps />,
  },
];

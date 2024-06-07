import React from 'react';

const Button = React.lazy(() => import('./Button'));
const Typography = React.lazy(() => import('./Typography'));
const Icon = React.lazy(() => import('./Icon'));

export const generalComponentConfigs = [
  {
    path: '/components/general/button',
    element: <Button />,
  },
  {
    path: '/components/general/typography',
    element: <Typography />,
  },
  {
    path: '/components/general/icon',
    element: <Icon />,
  },
];

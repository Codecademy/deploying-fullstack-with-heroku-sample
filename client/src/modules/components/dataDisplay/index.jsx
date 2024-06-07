import React from 'react';

const Avatar = React.lazy(() => import('./Avatar'));
const Badge = React.lazy(() => import('./Badge'));
const Collapse = React.lazy(() => import('./Collapse'));
const Calendar = React.lazy(() => import('./Calendar'));
const Cards = React.lazy(() => import('./Cards'));
const Carousel = React.lazy(() => import('./Carousel'));
const List = React.lazy(() => import('./List'));
const Popover = React.lazy(() => import('./Popover'));
const Tree = React.lazy(() => import('./Tree'));
const Tooltip = React.lazy(() => import('./Tooltip'));
const TimeLine = React.lazy(() => import('./TimeLine'));
const Tag = React.lazy(() => import('./Tag'));
const Tabs = React.lazy(() => import('./Tabs'));
const Comment = React.lazy(() => import('./Comment'));
const Descriptions = React.lazy(() => import('./Descriptions'));
const Empty = React.lazy(() => import('./Empty'));
const Image = React.lazy(() => import('./Image'));
const Statistic = React.lazy(() => import('./Statistic'));

export const dataDisplayComponentConfigs = [
  {
    path: '/components/dataDisplay/avatar',
    element: <Avatar />,
  },
  {
    path: '/components/dataDisplay/badge',
    element: <Badge />,
  },
  {
    path: '/components/dataDisplay/collapse',
    element: <Collapse />,
  },
  {
    path: '/components/dataDisplay/calendar',
    element: <Calendar />,
  },
  {
    path: '/components/dataDisplay/card',
    element: <Cards />,
  },
  {
    path: '/components/dataDisplay/carousel',
    element: <Carousel />,
  },
  {
    path: '/components/dataDisplay/list',
    element: <List />,
  },
  {
    path: '/components/dataDisplay/popover',
    element: <Popover />,
  },
  {
    path: '/components/dataDisplay/tree',
    element: <Tree />,
  },
  {
    path: '/components/dataDisplay/tooltip',
    element: <Tooltip />,
  },
  {
    path: '/components/dataDisplay/timeline',
    element: <TimeLine />,
  },
  {
    path: '/components/dataDisplay/tag',
    element: <Tag />,
  },
  {
    path: '/components/dataDisplay/tabs',
    element: <Tabs />,
  },
  {
    path: '/components/dataDisplay/comment',
    element: <Comment />,
  },
  {
    path: '/components/dataDisplay/descriptions',
    element: <Descriptions />,
  },
  {
    path: '/components/dataDisplay/empty',
    element: <Empty />,
  },
  {
    path: '/components/dataDisplay/image',
    element: <Image />,
  },
  {
    path: '/components/dataDisplay/statistic',
    element: <Statistic />,
  },
];

import React from 'react';

const Alert = React.lazy(() => import('./Alert'));
const Modal = React.lazy(() => import('./Modal'));
const Message = React.lazy(() => import('./Message'));
const Notification = React.lazy(() => import('./Notification'));
const Progress = React.lazy(() => import('./Progress'));
const Spin = React.lazy(() => import('./Spin'));
const PopConfirm = React.lazy(() => import('./PopConfirm'));
const Drawer = React.lazy(() => import('./Drawer'));
const Result = React.lazy(() => import('./Result'));
const Skeleton = React.lazy(() => import('./Skeleton'));

export const feedBackComponentConfigs = [
  {
    path: '/components/feedback/alert',
    element: <Alert />,
  },
  {
    path: '/components/feedback/modal',
    element: <Modal />,
  },
  {
    path: '/components/feedback/message',
    element: <Message />,
  },
  {
    path: '/components/feedback/notification',
    element: <Notification />,
  },
  {
    path: '/components/feedback/progress',
    element: <Progress />,
  },
  {
    path: '/components/feedback/pop-confirm',
    element: <PopConfirm />,
  },
  {
    path: '/components/feedback/spin',
    element: <Spin />,
  },
  {
    path: '/components/feedback/drawer',
    element: <Drawer />,
  },
  {
    path: '/components/feedback/result',
    element: <Result />,
  },
  {
    path: '/components/feedback/skeleton',
    element: <Skeleton />,
  },
];

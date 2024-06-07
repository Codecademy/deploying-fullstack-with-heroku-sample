import React from 'react';
import { rechartsConfigs } from './RechartRoutes';
import ColorPicker from '../../../modules/thirdParty/reactColor';
import GoogleMap from '../../../modules/thirdParty/googleMap';
import ReactNotificationEx from '../../../modules/thirdParty/reactNotification';
import ReactDropzone from '../../../modules/thirdParty/reactDropzone';
import ReactPlayer from '../../../modules/thirdParty/reactPlayer';
import Calendar from '../../../modules/thirdParty/calendar';
import ReactSlick from '../../../modules/thirdParty/reactSlick';
import Timeline from '../../../modules/thirdParty/timeLine';
import FroalaEditor from '../../../modules/thirdParty/froalaEditor';
import FileStack from '../../../modules/thirdParty/filestack';
import FusionCharts from '../../../modules/thirdParty/fusionCharts';
import ReactBeautifulDnd from '../../../modules/thirdParty/reactBeautifulDnd';

export const thirdPartyConfigs = [
  ...rechartsConfigs,
  {
    path: '/third-party/react-color',
    element: <ColorPicker />,
  },
  {
    path: '/third-party/calendar',
    element: <Calendar />,
  },
  {
    path: '/third-party/google-map',
    element: <GoogleMap />,
  },
  {
    path: '/third-party/react-color',
    element: <ColorPicker />,
  },
  {
    path: '/third-party/google-map',
    element: <GoogleMap />,
  },
  {
    path: '/third-party/react-notification',
    element: <ReactNotificationEx />,
  },
  {
    path: '/third-party/react-dropzone',
    element: <ReactDropzone />,
  },
  {
    path: '/third-party/react-dnd',
    element: <ReactBeautifulDnd />,
  },
  {
    path: '/third-party/react-player',
    element: <ReactPlayer />,
  },
  {
    path: '/third-party/calendar',
    element: <Calendar />,
  },
  {
    path: '/third-party/slider',
    element: <ReactSlick />,
  },
  {
    path: '/third-party/froala-editor',
    element: <FroalaEditor />,
  },
  {
    path: '/third-party/filestack',
    element: <FileStack />,
  },
  {
    path: '/third-party/fusion-charts',
    element: <FusionCharts />,
  },
  {
    path: '/third-party/time-line',
    element: <Timeline />,
  },
];

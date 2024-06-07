import React from 'react';

const AutoComplete = React.lazy(() => import('./AutoComplete'));
const Checkbox = React.lazy(() => import('./Checkbox'));
const Cascader = React.lazy(() => import('./Cascader'));
const Form = React.lazy(() => import('./Form'));
const DatePicker = React.lazy(() => import('./DatePicker'));
const InputNumber = React.lazy(() => import('./InputNumber'));
const Input = React.lazy(() => import('./Input'));
const Mention = React.lazy(() => import('./Mention'));
const Rate = React.lazy(() => import('./Rate'));
const Radio = React.lazy(() => import('./Radio'));
const Select = React.lazy(() => import('./Select'));
const Slider = React.lazy(() => import('./Slider'));
const Switches = React.lazy(() => import('./Switches'));
const TreeSelect = React.lazy(() => import('./TreeSelect'));
const TimePicker = React.lazy(() => import('./TimePicker'));
const Transfer = React.lazy(() => import('./Transfer'));
const Upload = React.lazy(() => import('./Upload'));

export const dataEntryComponentConfigs = [
  {
    path: '/components/dataEntry/auto-complete',
    element: <AutoComplete />,
  },
  {
    path: '/components/dataEntry/checkbox',
    element: <Checkbox />,
  },
  {
    path: '/components/dataEntry/cascader',
    element: <Cascader />,
  },
  {
    path: '/components/dataEntry/form',
    element: <Form />,
  },
  {
    path: '/components/dataEntry/date-picker',
    element: <DatePicker />,
  },
  {
    path: '/components/dataEntry/inputnumber',
    element: <InputNumber />,
  },
  {
    path: '/components/dataEntry/input',
    element: <Input />,
  },
  {
    path: '/components/dataEntry/mention',
    element: <Mention />,
  },
  {
    path: '/components/dataEntry/rate',
    element: <Rate />,
  },
  {
    path: '/components/dataEntry/radio',
    element: <Radio />,
  },
  {
    path: '/components/dataEntry/select',
    element: <Select />,
  },
  {
    path: '/components/dataEntry/slider',
    element: <Slider />,
  },
  {
    path: '/components/dataEntry/switch',
    element: <Switches />,
  },
  {
    path: '/components/dataEntry/tree-select',
    element: <TreeSelect />,
  },
  {
    path: '/components/dataEntry/time-picker',
    element: <TimePicker />,
  },
  {
    path: '/components/dataEntry/transfer',
    element: <Transfer />,
  },
  {
    path: '/components/dataEntry/upload',
    element: <Upload />,
  },
];

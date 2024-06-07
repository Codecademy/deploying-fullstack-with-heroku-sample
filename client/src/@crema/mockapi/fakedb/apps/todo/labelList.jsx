import { blue, green, grey, red } from '@ant-design/colors';

export const labelList = [
  {
    id: 211,
    name: 'Html',
    alias: 'html',
    label: 'Html',
    value: 'Html',
    color: red[5],
  },
  {
    id: 212,
    name: 'CSS',
    alias: 'css',
    label: 'CSS',
    value: 'CSS',
    color: blue[5],
  },
  {
    id: 213,
    name: 'JQuery',
    alias: 'jquery',
    label: 'JQuery',
    value: 'JQuery',
    color: green[5],
  },
  {
    id: 214,
    name: 'Node.js',
    alias: 'node',
    label: 'Node.js',
    value: 'Node.js',
    color: grey[5],
  },
];

export const onGetLabel = (labelId) => {
  return labelList.find((label) => label.id === +labelId);
};

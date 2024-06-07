import React from 'react';
import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { simpleGuageData } from './data';

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const chartConfigs = {
  type: 'angulargauge',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: simpleGuageData,
};

const SimpleGuage = () => {
  return <ReactFC {...chartConfigs} />;
};

export default SimpleGuage;

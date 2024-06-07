import React from 'react';
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.world';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { worldMapData } from './data';

ReactFC.fcRoot(FusionCharts, Maps, World, FusionTheme);

const chartConfigs = {
  type: 'world',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: worldMapData,
};

const WorldMap = () => {
  return <ReactFC {...chartConfigs} />;
};

export default WorldMap;

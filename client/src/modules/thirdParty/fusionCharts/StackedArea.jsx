import React from 'react';
import { stackAreaData } from './data';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

charts(FusionCharts);

const StackedArea = () => {
  return (
    <ReactFusioncharts
      type='stackedarea2d'
      width={600}
      height={400}
      dataFormat='JSON'
      dataSource={stackAreaData}
    />
  );
};

export default StackedArea;

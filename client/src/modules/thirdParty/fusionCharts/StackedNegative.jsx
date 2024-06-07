import React from 'react';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';
import { stackNegChartData } from './data';

charts(FusionCharts);

const StackedNegative = () => {
  return (
    <ReactFusioncharts
      type='stackedcolumn2d'
      width={600}
      height={400}
      dataFormat='JSON'
      dataSource={stackNegChartData}
    />
  );
};

export default StackedNegative;

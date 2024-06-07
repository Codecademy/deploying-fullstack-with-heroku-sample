import React from 'react';
import AreaChart from '../../../modules/thirdParty/recharts/Area';
import BarChart from '../../../modules/thirdParty/recharts/Bar';
import ComposedChart from '../../../modules/thirdParty/recharts/Composed';
import LineChart from '../../../modules/thirdParty/recharts/Line';
import PieChart from '../../../modules/thirdParty/recharts/Pie';
import Radial from '../../../modules/thirdParty/recharts/Radial';
import Treemap from '../../../modules/thirdParty/recharts/Treemap';
import Scatter from '../../../modules/thirdParty/recharts/Scatter';
import Radar from '../../../modules/thirdParty/recharts/Radar';
import FunnelChart from '../../../modules/thirdParty/recharts/Funnel';

export const rechartsConfigs = [
  {
    path: '/third-party/recharts/area',
    element: <AreaChart />,
  },
  {
    path: '/third-party/recharts/bar',
    element: <BarChart />,
  },
  {
    path: '/third-party/recharts/composed',
    element: <ComposedChart />,
  },
  {
    path: '/third-party/recharts/line',
    element: <LineChart />,
  },
  {
    path: '/third-party/recharts/pie',
    element: <PieChart />,
  },
  {
    path: '/third-party/recharts/radar',
    element: <Radar />,
  },
  {
    path: '/third-party/recharts/radial',
    element: <Radial />,
  },
  {
    path: '/third-party/recharts/treemap',
    element: <Treemap />,
  },
  {
    path: '/third-party/recharts/scatter',
    element: <Scatter />,
  },
  {
    path: '/third-party/recharts/funnel',
    element: <FunnelChart />,
  },
];

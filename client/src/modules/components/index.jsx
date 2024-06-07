import { generalComponentConfigs } from './general';
import { dataDisplayComponentConfigs } from './dataDisplay';
import { feedBackComponentConfigs } from './feedback';
import { navigationComponentConfigs } from './navigation';
import { tableComponentConfigs } from './table';
import { dataEntryComponentConfigs } from './dataEntry';
import { otherComponentConfigs } from './others';
import { layoutComponentConfigs } from './layout';

export const componentsConfigs = [
  ...dataDisplayComponentConfigs,
  ...feedBackComponentConfigs,
  ...dataEntryComponentConfigs,
  ...navigationComponentConfigs,
  ...generalComponentConfigs,
  ...otherComponentConfigs,
  ...tableComponentConfigs,
  ...layoutComponentConfigs,
];

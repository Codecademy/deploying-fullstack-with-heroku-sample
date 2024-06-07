import { generalComponentConfigs } from '../../../modules/components/general';
import { dataDisplayComponentConfigs } from '../../../modules/components/dataDisplay';
import { feedBackComponentConfigs } from '../../../modules/components/feedback';
import { navigationComponentConfigs } from '../../../modules/components/navigation';
import { tableComponentConfigs } from '../../../modules/components/table';
import { dataEntryComponentConfigs } from '../../../modules/components/dataEntry';
import { otherComponentConfigs } from '../../../modules/components/others';
import { layoutComponentConfigs } from '../../../modules/components/layout';

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

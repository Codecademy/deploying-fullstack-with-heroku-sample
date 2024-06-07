import React, { useState } from 'react';
import DealsTable from './DealsTable';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import AppSelect from '@crema/components/AppSelect';
import { StyledDealsTitle } from './index.styled';

const Deals = (props) => {
  const { dealsTableData } = props;
  const [tableData, setTableData] = useState(dealsTableData);

  const handleChange = (value) => {
    if (value === messages['dashboard.allDeals']) {
      setTableData(dealsTableData);
    } else if (value === messages['todo.completed']) {
      setTableData(
        dealsTableData.filter((data) => data.progress === 'Approved'),
      );
    } else {
      setTableData(
        dealsTableData.filter((data) => data.progress === 'Pending'),
      );
    }
  };

  const { messages } = useIntl();

  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={
        <div className='ant-row ant-row-middle'>
          <StyledDealsTitle>
            <IntlMessages id='dashboard.deals' />
          </StyledDealsTitle>
          <AppSelect
            menus={[
              messages['dashboard.allDeals'],
              messages['todo.completed'],
              messages['common.pending'],
            ]}
            defaultValue={messages['dashboard.allDeals']}
            onChange={handleChange}
          />
        </div>
      }
      extra={<a href='#'>{messages['common.viewAll']}</a>}
      heightFull
    >
      <DealsTable dealsTableData={tableData} />
    </AppCard>
  );
};

export default Deals;

Deals.defaultProps = {
  dealsTableData: [],
};

Deals.propTypes = {
  dealsTableData: PropTypes.array,
};

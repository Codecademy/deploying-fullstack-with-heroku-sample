import React from 'react';
import SalesGraph from './SalesGraph';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { StyledMetricSalesCard, StyledMetricSalesGraph } from './index.styled';

const Sales = ({ data }) => {
  const { messages } = useIntl();
  return (
    <StyledMetricSalesCard title={messages['dashboard.salesToday']} heightFull>
      <h2>{data.salesToday}</h2>
      <p>
        {data.salesYesterday} <IntlMessages id='common.yesterday' />
      </p>
      <StyledMetricSalesGraph>
        <SalesGraph data={data.salesGraphData} />
      </StyledMetricSalesGraph>
    </StyledMetricSalesCard>
  );
};

export default Sales;

Sales.defaultProps = {
  data: {
    salesToday: '',
    salesYesterday: '',
    salesGraphData: [],
  },
};

Sales.propTypes = {
  data: PropTypes.object,
};

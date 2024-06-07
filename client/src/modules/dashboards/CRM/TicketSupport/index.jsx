import React from 'react';
import TicketSupportTable from './TicketSupportTable';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';

const TicketSupport = (props) => {
  const { ticketSupportData } = props;
  const { messages } = useIntl();

  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={messages['dashboard.latestTicketSupport']}
      extra={<a href='#'>{messages['common.viewAll']}</a>}
    >
      <TicketSupportTable ticketSupportData={ticketSupportData} />
    </AppCard>
  );
};

export default TicketSupport;

TicketSupport.defaultProps = {
  ticketSupportData: [],
};

TicketSupport.propTypes = {
  ticketSupportData: PropTypes.array,
};

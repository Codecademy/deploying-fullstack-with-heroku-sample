import React from 'react';
import AppCard from '@crema/components/AppCard';
import TimesheetTable from './TimesheetTable';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

const Timesheet = ({ timesheet }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={messages['dashboard.crm.timesheet']}
      extra={<a href='#'>{messages['common.viewAll']}</a>}
    >
      <TimesheetTable timesheet={timesheet} />
    </AppCard>
  );
};

export default Timesheet;

Timesheet.propTypes = {
  timesheet: PropTypes.array,
};

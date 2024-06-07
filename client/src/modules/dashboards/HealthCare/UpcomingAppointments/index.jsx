import React from 'react';
import { useIntl } from 'react-intl';
import AppMenu from '@crema/components/AppMenu';
import AppointmentCell from './AppointmentCell';
import PropTypes from 'prop-types';
import { List } from 'antd';
import {
  StyledUpComingAppointCard,
  StyledUpComingScrollbar,
} from './index.styled';

const UpcomingAppointments = ({ data }) => {
  const { messages } = useIntl();
  return (
    <StyledUpComingAppointCard
      className='no-card-space-ltr-rtl'
      title={messages['healthCare.upcomingAppointments']}
      extra={<AppMenu />}
    >
      <StyledUpComingScrollbar>
        <List
          dataSource={data}
          renderItem={(appointment) => (
            <AppointmentCell key={appointment.id} appointment={appointment} />
          )}
        />
      </StyledUpComingScrollbar>
    </StyledUpComingAppointCard>
  );
};

export default UpcomingAppointments;

UpcomingAppointments.defaultProps = {
  data: [],
};

UpcomingAppointments.propTypes = {
  data: PropTypes.array,
};

import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledAppointmentCell,
  StyledAppointmentCellAction,
  StyledAppointmentCellAvatar,
  StyledAppointmentCellContent,
  StyledAppointmentCellTime,
} from './index.styled';

const AppointmentCell = ({ appointment }) => {
  return (
    <StyledAppointmentCell className='item-hover'>
      <StyledAppointmentCellAvatar src={appointment.profile_pic} />
      <StyledAppointmentCellContent>
        <h5>{appointment.name}</h5>
        <p>{appointment.speciality}</p>
      </StyledAppointmentCellContent>
      <StyledAppointmentCellAction>
        <StyledAppointmentCellTime>
          {appointment.appointmentTime}
        </StyledAppointmentCellTime>
        <p>{appointment.appointmentDate}</p>
      </StyledAppointmentCellAction>
    </StyledAppointmentCell>
  );
};

export default AppointmentCell;

AppointmentCell.propTypes = {
  appointment: PropTypes.object.isRequired,
};

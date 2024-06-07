import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import {
  StyledDoctorAction,
  StyledDoctorAvatar,
  StyledDoctorCell,
  StyledDoctorContent,
} from './index.styled';

const DoctorCell = ({ doctor }) => {
  return (
    <StyledDoctorCell className='item-hover'>
      <StyledDoctorAvatar src={doctor.profile_pic} />
      <StyledDoctorContent>
        <h5>{doctor.name}</h5>
        <p>{doctor.speciality}</p>
      </StyledDoctorContent>
      <StyledDoctorAction>
        {doctor.scheduled ? (
          <Button className='btn-secondary-outline'>Remove</Button>
        ) : (
          <Button className='btn-primary-outline'>Schedule</Button>
        )}
      </StyledDoctorAction>
    </StyledDoctorCell>
  );
};

export default DoctorCell;

DoctorCell.propTypes = {
  doctor: PropTypes.object.isRequired,
};

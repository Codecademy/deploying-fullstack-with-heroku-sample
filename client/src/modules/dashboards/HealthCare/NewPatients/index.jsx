import React from 'react';
import { useIntl } from 'react-intl';
import PatientGraph from './PatientGraph';
import AppMenu from '@crema/components/AppMenu';
import PropTypes from 'prop-types';
import {
  StyledPatientArrowIcon,
  StyledPatientCard,
  StyledPatientsContent,
  StyledPatientsGraph,
  StyledPatientsNumber,
} from './index.styled';

const NewPatients = ({ data }) => {
  const { messages } = useIntl();
  return (
    <StyledPatientCard
      title={messages['healthCare.newPatient']}
      extra={<AppMenu />}
    >
      <StyledPatientsContent>
        <StyledPatientsNumber>214</StyledPatientsNumber>
        <StyledPatientArrowIcon>
          <img
            src={'/assets/images/dashboard/metrics_icon_active.png'}
            alt='down'
          />
        </StyledPatientArrowIcon>
      </StyledPatientsContent>
      <StyledPatientsGraph>
        <PatientGraph data={data} />
      </StyledPatientsGraph>
    </StyledPatientCard>
  );
};

export default NewPatients;

NewPatients.defaultProps = {
  data: [],
};

NewPatients.propTypes = {
  data: PropTypes.array,
};

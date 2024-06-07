import React from 'react';
import { useIntl } from 'react-intl';
import AppCard from '@crema/components/AppCard';
import AppMenu from '@crema/components/AppMenu';
import DoctorCell from './DoctorCell';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { StyledDrScrollbar } from './index.styled';

const TopDoctors = ({ data }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={messages['healthCare.topDoctors']}
      extra={<AppMenu />}
    >
      <StyledDrScrollbar>
        <List
          dataSource={data}
          renderItem={(doctor) => (
            <DoctorCell key={doctor.id} doctor={doctor} />
          )}
        />
      </StyledDrScrollbar>
    </AppCard>
  );
};

export default TopDoctors;

TopDoctors.defaultProps = {
  data: [],
};

TopDoctors.propTypes = {
  data: PropTypes.array,
};

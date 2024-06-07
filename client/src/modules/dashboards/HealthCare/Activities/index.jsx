import React from 'react';
import { useIntl } from 'react-intl';
import ActivitiesItem from './ActivitiesItem';
import PropTypes from 'prop-types';
import AppRowContainer from '@crema/components/AppRowContainer';
import AppCard from '@crema/components/AppCard';
import { Col } from 'antd';

const Activities = ({ activities }) => {
  const { messages } = useIntl();
  return (
    <AppCard title={messages['dashboard.crypto.activities']}>
      <AppRowContainer>
        {activities.map((activities, index) => (
          <Col xs={12} sm={8} md={12} lg={12} xl={8} key={index}>
            <ActivitiesItem activities={activities} />
          </Col>
        ))}
      </AppRowContainer>
    </AppCard>
  );
};

export default Activities;

Activities.propTypes = {
  activities: PropTypes.array.isRequired,
};

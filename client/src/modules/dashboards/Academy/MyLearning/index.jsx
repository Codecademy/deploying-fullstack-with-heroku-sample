import React from 'react';
import AppCard from '@crema/components/AppCard';
import LearningItem from './LearningItem';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { List } from 'antd';

const MyLearning = ({ learningData }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={messages['academy.myLearning']}
    >
      <List
        dataSource={learningData}
        renderItem={(data, index) => <LearningItem key={index} course={data} />}
      />
    </AppCard>
  );
};

export default MyLearning;

MyLearning.propTypes = {
  learningData: PropTypes.array,
};

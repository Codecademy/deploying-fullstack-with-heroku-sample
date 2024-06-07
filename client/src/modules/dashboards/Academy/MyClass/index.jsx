import AppCard from '@crema/components/AppCard';
import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { List, Progress } from 'antd';
import {
  StyledMyClassContent,
  StyledMyClassContentHeader,
  StyledMyClassItem,
  StyledMyClassPercent,
  StyledMyClassProgressView,
  StyledMyClassThumb,
} from './index.styled';

const ClassItem = ({ item }) => {
  return (
    <StyledMyClassItem key={item.id} className='item-hover'>
      <StyledMyClassThumb>
        <img alt='' src={item.icon} />
      </StyledMyClassThumb>
      <StyledMyClassContent>
        <StyledMyClassContentHeader>
          <h3>{item.name}</h3>
          <StyledMyClassPercent>{item.percent}%</StyledMyClassPercent>
        </StyledMyClassContentHeader>
        <StyledMyClassProgressView>
          <Progress
            percent={item.percent}
            strokeColor='#0A8FDC'
            trailColor='#d6d6d6'
            size='small'
            showInfo={false}
          />
        </StyledMyClassProgressView>
      </StyledMyClassContent>
    </StyledMyClassItem>
  );
};

const MyClass = ({ classData }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      heightFull
      className='no-card-space-ltr-rtl'
      title={messages['academy.myClass']}
    >
      <List
        dataSource={classData}
        renderItem={(data, index) => <ClassItem key={index} item={data} />}
      />
    </AppCard>
  );
};

export default MyClass;

MyClass.propTypes = {
  classData: PropTypes.array,
};

ClassItem.propTypes = {
  item: PropTypes.object,
};

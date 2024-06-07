import React from 'react';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { List, Progress } from 'antd';
import {
  StyledLatestResultItem,
  StyledLatestResultSecondItem,
  StyledLatestResultsFirstItem,
} from './index.styled';

const getColor = (percentage) => {
  if (percentage < 50) {
    return '#F5585B';
  }
  return '#0A8FDC';
};

const ResultItem = ({ result }) => {
  return (
    <StyledLatestResultItem className='item-hover'>
      <StyledLatestResultsFirstItem>
        <h3 className='text-truncate'>{result.chapter}</h3>
        <p className='text-truncate'>- {result.topic}</p>
      </StyledLatestResultsFirstItem>
      <StyledLatestResultSecondItem>
        <Progress
          percent={result.percentage}
          strokeColor={getColor(result.percentage)}
          trailColor='#d6d6d6'
          size='small'
        />
      </StyledLatestResultSecondItem>
    </StyledLatestResultItem>
  );
};

const LatestResults = ({ latestResults }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      heightFull
      title={messages['academy.latestResults']}
      className='no-card-space-ltr-rtl'
    >
      <List
        dataSource={latestResults}
        renderItem={(data, index) => <ResultItem key={index} result={data} />}
      />
    </AppCard>
  );
};

export default LatestResults;

LatestResults.propTypes = {
  latestResults: PropTypes.array,
};

ResultItem.propTypes = {
  result: PropTypes.object,
};

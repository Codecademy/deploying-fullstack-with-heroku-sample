import React from 'react';
import AppCard from '@crema/components/AppCard';
import AppSelect from '@crema/components/AppSelect';
import { useIntl } from 'react-intl';
import InquiriesChart from './InquiriesChart';
import PropTypes from 'prop-types';

import AppList from '@crema/components/AppList';
import {
  StyledContent,
  StyledDot,
  StyledSecondary,
  StyledTopInquiries,
} from './index.styled';
import { Typography } from 'antd';

const InquiriesCell = ({ inquiry }) => {
  return (
    <div
      style={{
        padding: 8,
        display: 'flex',
      }}
      className='item-hover'
    >
      <StyledDot
        style={{
          backgroundColor: inquiry.color,
        }}
      />
      <StyledContent>
        <Typography.Title
          level={5}
          style={{
            fontSize: 14,
            marginBottom: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {inquiry.title}
        </Typography.Title>
        <StyledSecondary>{inquiry.value}%</StyledSecondary>
      </StyledContent>
    </div>
  );
};

InquiriesCell.propTypes = {
  inquiry: PropTypes.object,
};

const TopInquiries = ({ topInquiries }) => {
  const { messages } = useIntl();

  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };

  return (
    <AppCard
      title={messages['dashboard.eCommerce.topInquiries']}
      extra={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }
    >
      <StyledTopInquiries>
        <div className='top-inquiry-col top-inquiry-chart'>
          <InquiriesChart data={topInquiries} />
        </div>

        <div className='top-inquiry-col'>
          <AppList
            data={topInquiries}
            renderItem={(data) => (
              <InquiriesCell key={'inquiry-' + data.id} inquiry={data} />
            )}
          />
        </div>
      </StyledTopInquiries>
    </AppCard>
  );
};

export default TopInquiries;

TopInquiries.propTypes = {
  topInquiries: PropTypes.array,
};

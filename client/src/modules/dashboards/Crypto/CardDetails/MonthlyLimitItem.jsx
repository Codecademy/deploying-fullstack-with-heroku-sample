import React from 'react';
import PropTypes from 'prop-types';
import AppCircularProgress from '@crema/components/AppCircularProgress';
import { rgba } from 'polished';
import { Typography } from 'antd';
import { StyledTextNoSpace } from './index.styled';

const MonthlyLimitItem = ({ monthlyLimit }) => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <div
        style={{
          marginBottom: 6,
        }}
      >
        <AppCircularProgress
          strokeColor={monthlyLimit.activeColor}
          trailColor={rgba(monthlyLimit.activeColor, 0.1)}
          percent={monthlyLimit.value}
        />
      </div>
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Typography.Text strong>{monthlyLimit.title}</Typography.Text>
        <StyledTextNoSpace>{monthlyLimit.income}</StyledTextNoSpace>
      </div>
    </div>
  );
};

export default MonthlyLimitItem;

MonthlyLimitItem.propTypes = {
  monthlyLimit: PropTypes.object.isRequired,
};

import React from 'react';

import { Typography } from 'antd';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';
import AppCard from '@crema/components/AppCard';

import {
  StyledDurationWrapper,
  StyledFlexContainer,
  StyledFlexSuccessContainer,
  StyledFlexWrapper,
  StyledIconWrapper,
  StyledTitleWrapper,
  StyledToggleContainer,
} from '../index.styled';
import { getAssetsUrl } from '@crema/helpers/UrlHelper';

const StatsDirCard = ({ data }) => {
  return (
    <AppCard className='card-hover no-card-space'>
      <StyledFlexWrapper>
        <StyledFlexContainer>
          <StyledIconWrapper
            style={{
              color: data.color,
              backgroundColor: data.color + '22',
            }}
          >
            {data?.icon ? (
              data.icon
            ) : (
              <img src={getAssetsUrl(data.iconImg)} alt='' />
            )}
          </StyledIconWrapper>

          <div style={{ marginRight: 8, overflow: 'hidden' }}>
            <Typography.Title level={5}>{data.value}</Typography.Title>
            <StyledTitleWrapper>{data.name}</StyledTitleWrapper>
          </div>
        </StyledFlexContainer>
        <StyledToggleContainer>
          <StyledFlexSuccessContainer>
            {!data?.hidePercent && (
              <span style={{ marginRight: 4 }}>
                <img
                  src={
                    data.percentageChange > 0
                      ? '/assets/images/dashboard/up-arrow.svg'
                      : '/assets/images/dashboard/down-arrow.svg'
                  }
                  alt='up-icon'
                />
              </span>
            )}
            <span
              style={{
                marginLeft: 1,
                fontSize: 14,
                fontWeight: Fonts.BOLD,
                color: data.percentageChange > 0 ? '#11C15B' : '#F04F47',
              }}
            >
              {data.percentageChange > 0 ? '+' : ''}
              {data.percentageChange}%
            </span>
          </StyledFlexSuccessContainer>
          <StyledDurationWrapper>
            <span>{data.duration}</span>
          </StyledDurationWrapper>
        </StyledToggleContainer>
      </StyledFlexWrapper>
    </AppCard>
  );
};

export default StatsDirCard;

StatsDirCard.propTypes = {
  data: PropTypes.object,
};

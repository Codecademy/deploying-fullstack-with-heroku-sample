import React from 'react';
import AppCard from '@crema/components/AppCard';

import { Avatar, Typography } from 'antd';
import PropTypes from 'prop-types';
import { getAssetsUrl } from '@crema/helpers/UrlHelper';
import {
  StyledFlexContainer,
  StyledItemContainer,
  StyledTag,
  StyledTitleWrapper,
} from '../index.styled';

const StatsItemCard = ({ stats }) => {
  return (
    <AppCard className='card-hover'>
      <StyledFlexContainer>
        <div style={{ marginRight: 16 }}>
          <Avatar
            style={{
              width: 46,
              height: 46,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              backgroundColor: stats.badgeColor,
              padding: 2,
            }}
          >
            <img src={getAssetsUrl(stats.icon)} alt='' />
          </Avatar>
        </div>
        <StyledItemContainer>
          <div style={{ overflow: 'hidden' }}>
            <Typography.Title level={3}>{stats.count}</Typography.Title>
            <StyledTitleWrapper>{stats.title}</StyledTitleWrapper>
          </div>
          <StyledTag
            style={{
              backgroundColor: stats.bgcolor,
              color: stats.badgeColor,
            }}
          >
            {stats.new}
          </StyledTag>
        </StyledItemContainer>
      </StyledFlexContainer>
    </AppCard>
  );
};

export default StatsItemCard;

StatsItemCard.propTypes = {
  stats: PropTypes.object,
};

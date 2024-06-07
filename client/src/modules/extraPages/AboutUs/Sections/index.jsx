import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import { Avatar } from 'antd';
import { StyledPrimarySubTitle, StyledSecDesc } from './index.styled';

const Sections = ({ data }) => {
  return (
    <AppCard style={{ height: '100%' }}>
      <div
        style={{
          marginBottom: 12,
        }}
      >
        <Avatar
          size={40}
          style={{
            backgroundColor: data.avatarColor,
          }}
        >
          {data.icon}
        </Avatar>
      </div>

      <StyledPrimarySubTitle level={3}>{data.title}</StyledPrimarySubTitle>
      <StyledSecDesc>{data.content}</StyledSecDesc>
    </AppCard>
  );
};

export default Sections;

Sections.propTypes = {
  data: PropTypes.object,
};

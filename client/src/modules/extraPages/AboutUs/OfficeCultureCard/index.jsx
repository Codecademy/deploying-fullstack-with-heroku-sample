import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import { StyledOfcDesc, StyledTitle } from './index.styled';

const OfficeCultureCard = ({ officeCulture }) => {
  return (
    <AppCard
      style={{ height: '100%' }}
      cover={<img alt='OfficeCulture' src={officeCulture.srcImg} />}
    >
      <StyledTitle level={3}>{officeCulture.title}</StyledTitle>
      <StyledOfcDesc>{officeCulture.description}</StyledOfcDesc>
    </AppCard>
  );
};

export default OfficeCultureCard;

OfficeCultureCard.propTypes = {
  officeCulture: PropTypes.object,
};

import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledActivityFlex,
  StyledImgWrapper,
  StyledText,
  StyledTextWrapper,
} from './index.styled';
import { Typography } from 'antd';

const ActivitiesItem = ({ activities }) => {
  return (
    <StyledActivityFlex>
      <StyledImgWrapper>
        <img src={activities.srcImg} alt={activities.name} />
      </StyledImgWrapper>
      <StyledTextWrapper>
        <StyledText>{activities.name}</StyledText>
        <Typography.Text strong>{activities.value}</Typography.Text>
      </StyledTextWrapper>
    </StyledActivityFlex>
  );
};

export default ActivitiesItem;

ActivitiesItem.propTypes = {
  activities: PropTypes.object.isRequired,
};

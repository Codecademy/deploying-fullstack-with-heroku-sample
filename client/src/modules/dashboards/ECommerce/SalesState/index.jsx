import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import {
  StyledRow,
  StyledStateCard,
  StyledStateContent,
  StyledStateThumb,
} from './index.styled';

const { Title } = Typography;

const SalesState = ({ state }) => {
  const { icon, value, type, bgColor } = state;
  return (
    <StyledStateCard
      className='card-hover'
      style={{ backgroundColor: bgColor }}
    >
      <StyledRow>
        <StyledStateThumb>
          <img src={icon} alt={icon.name} />
        </StyledStateThumb>
        <StyledStateContent>
          <Title className='text-truncate' level={3}>
            {value}
          </Title>
          <p className='text-truncate'>{type}</p>
        </StyledStateContent>
      </StyledRow>
    </StyledStateCard>
  );
};

export default SalesState;

SalesState.propTypes = {
  state: PropTypes.object,
};

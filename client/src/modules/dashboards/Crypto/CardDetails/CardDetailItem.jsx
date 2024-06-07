import React from 'react';
import PropTypes from 'prop-types';
import { StyledDesc, StyledTitle } from './index.styled';

const CardDetailItem = ({ cardDetail }) => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <StyledTitle level={5}>{cardDetail.title}</StyledTitle>
      <StyledDesc>{cardDetail.name}</StyledDesc>
    </div>
  );
};

export default CardDetailItem;

CardDetailItem.propTypes = {
  cardDetail: PropTypes.object.isRequired,
};

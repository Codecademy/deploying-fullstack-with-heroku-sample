import React from 'react';
import PropTypes from 'prop-types';
import { StyledClientLogo } from './index.styled';

const ClientLogo = ({ client }) => {
  return (
    <StyledClientLogo>
      <img src={client.srcImg} alt={client.name} />
    </StyledClientLogo>
  );
};

export default ClientLogo;

ClientLogo.propTypes = {
  client: PropTypes.object,
};

import React from 'react';
import PropTypes from 'prop-types';
import ClientLogo from './ClientLogo';
import { useIntl } from 'react-intl';
import {
  StyledAppCard,
  StyledClient,
  StyledClientWrapper,
} from './index.styled';

const Clients = ({ client }) => {
  const { messages } = useIntl();
  return (
    <StyledAppCard title={messages['extraPages.client']}>
      <div
        style={{
          overflow: 'hidden',
        }}
      >
        <StyledClientWrapper>
          {client.map((client, index) => (
            <StyledClient key={index}>
              <ClientLogo client={client} />
            </StyledClient>
          ))}
        </StyledClientWrapper>
      </div>
    </StyledAppCard>
  );
};

export default Clients;

Clients.propTypes = {
  client: PropTypes.array,
};

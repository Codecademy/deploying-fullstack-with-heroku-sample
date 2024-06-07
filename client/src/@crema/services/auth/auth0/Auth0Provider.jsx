import React from 'react';
import PropTypes from 'prop-types';
import { Auth0Provider as Auth0 } from '@auth0/auth0-react';

const Auth0Provider = ({ children }) => {
  return (
    <Auth0
      domain='yogi0823.us.auth0.com'
      clientId='tS3esCQdie5yKbr6FTl7416nLdCzlSgr'
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0>
  );
};

export default Auth0Provider;
Auth0Provider.propTypes = {
  children: PropTypes.node,
};

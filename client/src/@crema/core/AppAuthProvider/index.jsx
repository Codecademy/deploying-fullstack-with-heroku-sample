import React from 'react';
import FirebaseAuthProvider from '@crema/services/auth/firebase/FirebaseAuthProvider';
import PropTypes from 'prop-types';

const AppAuthProvider = ({ children }) => {
  return <FirebaseAuthProvider>{children}</FirebaseAuthProvider>;
};

AppAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppAuthProvider;

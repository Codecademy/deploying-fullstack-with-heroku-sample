import React from 'react';
import PropTypes from 'prop-types';
import AppLoader from '../AppLoader';

const AppSuspense = (props) => {
  return (
    <React.Suspense fallback={<AppLoader {...props.loadingProps} />}>
      {props.children}
    </React.Suspense>
  );
};

AppSuspense.propTypes = {
  loadingProps: PropTypes.object,
};

AppSuspense.defaultProps = {
  loadingProps: {
    delay: 300,
  },
};

export default AppSuspense;

AppSuspense.propTypes = {
  children: PropTypes.node.isRequired,
};

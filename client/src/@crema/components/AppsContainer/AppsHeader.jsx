import React from 'react';
import PropTypes from 'prop-types';
import { StyledAppsHeader } from './index.styled';

const AppsHeader = ({ children }) => {
  return <StyledAppsHeader>{children}</StyledAppsHeader>;
};

export default AppsHeader;
AppsHeader.defaultProps = {};

AppsHeader.propTypes = {
  children: PropTypes.node,
};

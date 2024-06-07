import React from 'react';
import PropTypes from 'prop-types';
import { StyleProvider } from '@ant-design/cssinjs';

const AppStyleProvider = ({ children }) => {
  return <StyleProvider hashPriority='high'>{children}</StyleProvider>;
};
export default AppStyleProvider;

AppStyleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

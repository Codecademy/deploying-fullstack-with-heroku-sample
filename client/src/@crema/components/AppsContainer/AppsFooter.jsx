import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { StyledAppFooter } from './index.styled';

const AppsFooter = (props) => {
  const { children, className, ...rest } = props;

  return (
    <StyledAppFooter className={clsx(className)} {...rest}>
      {children}
    </StyledAppFooter>
  );
};

export default AppsFooter;

AppsFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

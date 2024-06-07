import React, { useEffect, useRef } from 'react';
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

export const StyledScrollbar = styled(SimpleBarReact)`
  position: relative;
  width: 100%;
  height: 100%;

  & .simplebar-offset,
  & .simplebar-content-wrapper,
  & .simplebar-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

// eslint-disable-next-line no-unused-vars

const AppScrollbar = ({
  children,
  className,
  scrollToTop = false,
  ...others
}) => {
  const ref = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollToTop && ref) {
      // ref.current?.recalculate();
    }
  }, [ref, scrollToTop, pathname]);

  return (
    <StyledScrollbar ref={ref} {...others} className={className}>
      {children}
    </StyledScrollbar>
  );
};

export default AppScrollbar;

AppScrollbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  scrollToTop: PropTypes.bool,
};

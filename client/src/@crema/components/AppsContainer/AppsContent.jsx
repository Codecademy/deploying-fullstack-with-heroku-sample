import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { StyledAppContentContainer } from './index.styled';

const AppsContent = (props) => {
  const { children, isDetailView, fullView } = props;

  return (
    <StyledAppContentContainer
      className={clsx({ isDetailView: isDetailView }, { fullView: fullView })}
    >
      {children}
    </StyledAppContentContainer>
  );
};

export default AppsContent;

AppsContent.defaultProps = { isDetailView: false };

AppsContent.propTypes = {
  children: PropTypes.node,
  isDetailView: PropTypes.bool,
  fullView: PropTypes.bool,
};

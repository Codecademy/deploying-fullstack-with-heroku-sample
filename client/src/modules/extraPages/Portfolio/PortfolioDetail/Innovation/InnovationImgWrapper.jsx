import React from 'react';
import PropsTypes from 'prop-types';
import { StyledInnovationImgWrapper } from './index.styled';

const InnovationImgWrapper = ({ children }) => {
  return <StyledInnovationImgWrapper>{children}</StyledInnovationImgWrapper>;
};

export default InnovationImgWrapper;

InnovationImgWrapper.propTypes = {
  children: PropsTypes.node,
};

import React from 'react';
import { Progress } from 'antd';
import { StyledListFooter, StyledLoaderProgress } from './index.styled';
import PropTypes from 'prop-types';

const GridFooter = ({ loading, footerText }) => {
  if (loading) {
    return (
      <StyledLoaderProgress>
        <Progress percent={30} />
        <span>Loading...</span>
      </StyledLoaderProgress>
    );
  } else {
    return (
      <StyledListFooter>
        <p>{footerText}</p>
      </StyledListFooter>
    );
  }
};

export default GridFooter;

GridFooter.propTypes = {
  loading: PropTypes.bool,
  footerText: PropTypes.string,
};

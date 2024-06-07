import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';
import { StyledListFooter, StyledLoaderProgress } from './index.styled';

const ListFooter = ({ loading, footerText }) => {
  return loading ? (
    <StyledLoaderProgress>
      <Progress percent={30} />
      <span>Loading...</span>
    </StyledLoaderProgress>
  ) : (
    <StyledListFooter>
      <p>{footerText}</p>
    </StyledListFooter>
  );
};

export default ListFooter;

ListFooter.propTypes = {
  loading: PropTypes.bool,
  footerText: PropTypes.string,
};

ListFooter.defaultProps = {
  loading: false,
};

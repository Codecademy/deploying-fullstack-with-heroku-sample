import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { CheckOutlined } from '@ant-design/icons';
import { StyledAppSelectedIcon } from './index.styled';

const AppSelectedIcon = ({ backgroundColor, isCenter = true, color }) => {
  return (
    <StyledAppSelectedIcon
      className={clsx({ isCenter: isCenter })}
      backgroundColor={backgroundColor}
      color={color}
    >
      <CheckOutlined />
    </StyledAppSelectedIcon>
  );
};

export default AppSelectedIcon;

AppSelectedIcon.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  isCenter: PropTypes.bool,
};

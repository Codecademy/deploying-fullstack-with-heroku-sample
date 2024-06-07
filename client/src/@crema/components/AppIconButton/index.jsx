/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { StyledIconBtn } from './index.styled';
import clsx from 'clsx';

const AppIconButton = ({ title, icon, className, onClick, ...rest }) => {
  if (title)
    return (
      <Tooltip title={title}>
        <StyledIconBtn
          className={clsx('icon-btn', className)}
          shape='circle'
          icon={icon}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          {...rest}
        />
      </Tooltip>
    );
  return (
    <StyledIconBtn
      className={clsx('icon-btn', className)}
      shape='circle'
      icon={icon}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      {...rest}
    />
  );
};

export default AppIconButton;

AppIconButton.propTypes = {
  icon: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.any,
  onClick: PropTypes.func,
};

AppIconButton.defaultProps = {
  onClick: () => {},
  className: '',
  title: '',
};

import React from 'react';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import AppIconButton from '../AppIconButton';
import { StyledStarIcon } from './index.styled';

const AppsStarredIcon = ({ item, title, onChange }) => {
  return (
    <AppIconButton
      icon={
        <StyledStarIcon>
          {item?.isStarred ? <StarFilled /> : <StarOutlined />}
        </StyledStarIcon>
      }
      title={title}
      onClick={(e) => onChange(!item.isStarred, item, e)}
    />
  );
};

export default AppsStarredIcon;

AppsStarredIcon.propTypes = {
  item: PropTypes.object,
  onChange: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

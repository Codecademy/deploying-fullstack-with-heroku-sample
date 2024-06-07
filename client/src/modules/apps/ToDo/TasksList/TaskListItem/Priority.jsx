import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';

const Priority = ({ priority }) => {
  return (
    <Tag color={priority.color + '20'} style={{ color: priority.color }}>
      {priority.name}
    </Tag>
  );
};

export default Priority;

Priority.propTypes = {
  priority: PropTypes.object.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const EditButton = ({ action, title }) => {
  return (
    <Button shape='circle' type='primary' onClick={action} size='large'>
      {title}
    </Button>
  );
};

export default EditButton;

EditButton.propTypes = {
  title: PropTypes.any.isRequired,
  action: PropTypes.func,
};

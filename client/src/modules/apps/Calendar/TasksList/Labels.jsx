import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { MdLabelOutline } from 'react-icons/md';
import { StyledTodoLabelGroup, StyledTodoLabelGroupItem } from './index.styled';

const Labels = ({ labels }) => {
  return (
    <StyledTodoLabelGroup className='todo-list-item-label-group'>
      {labels.map((label) => {
        return (
          <Tooltip title={label.name} placement='top' key={label.id}>
            <StyledTodoLabelGroupItem style={{ color: label.color }}>
              <MdLabelOutline />
            </StyledTodoLabelGroupItem>
          </Tooltip>
        );
      })}
    </StyledTodoLabelGroup>
  );
};

export default Labels;

Labels.propTypes = {
  labels: PropTypes.array.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import {
  StyledScrumBoardLabel,
  StyledScrumBoardLabelFlex,
} from './index.styled';

const Labels = ({ labels }) => {
  return (
    <StyledScrumBoardLabelFlex>
      {labels.map((label) => {
        return (
          <Tooltip title={label.name} placement='top' key={label.id}>
            <StyledScrumBoardLabel
              key={label.id}
              style={{ backgroundColor: label.color }}
            />
          </Tooltip>
        );
      })}
    </StyledScrumBoardLabelFlex>
  );
};

export default Labels;

Labels.propTypes = {
  labels: PropTypes.array.isRequired,
};

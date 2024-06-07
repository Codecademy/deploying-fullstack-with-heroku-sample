import React from 'react';
import PropTypes from 'prop-types';
import { StarFilled } from '@ant-design/icons';
import { Checkbox } from 'antd';
import { StyledSidebarRatingCell } from './index.styled';

const RatingCell = ({ selected, data, onChange }) => {
  return (
    <StyledSidebarRatingCell onClick={() => onChange(data)}>
      <Checkbox
        checked={selected.some((item) => item === data)}
        color='primary'
      />
      {data}
      <StarFilled style={{ fontSize: 14, marginLeft: 5 }} />
    </StyledSidebarRatingCell>
  );
};

export default RatingCell;

RatingCell.propTypes = {
  selected: PropTypes.any,
  data: PropTypes.any,
  onChange: PropTypes.func,
};

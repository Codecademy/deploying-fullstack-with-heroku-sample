import React from 'react';
import PropTypes from 'prop-types';
import { CheckOutlined } from '@ant-design/icons';
import {
  StyledProductSidebarColorCell,
  StyledProductSidebarColorCellBtn,
} from './index.styled';

const ColorCell = ({ selected, data, onChange }) => {
  return (
    <StyledProductSidebarColorCell
      onClick={() => onChange(data)}
      style={{
        backgroundColor: data,
      }}
    >
      {selected.some((item) => item === data) ? (
        <StyledProductSidebarColorCellBtn>
          <CheckOutlined />
        </StyledProductSidebarColorCellBtn>
      ) : null}
    </StyledProductSidebarColorCell>
  );
};

export default ColorCell;

ColorCell.propTypes = {
  selected: PropTypes.array,
  data: PropTypes.any,
  onChange: PropTypes.func,
};

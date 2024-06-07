import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import {
  StyledEarningAction,
  StyledEarningDot,
  StyledEarningText,
} from './index.styled';

const Categories = (props) => {
  const { category } = props;

  return (
    <List.Item>
      <StyledEarningDot style={{ backgroundColor: props.category.colorName }} />
      <StyledEarningText>{category.name}</StyledEarningText>
      <StyledEarningAction>${category.value}</StyledEarningAction>
    </List.Item>
  );
};

export default Categories;

Categories.propTypes = {
  category: PropTypes.object.isRequired,
};

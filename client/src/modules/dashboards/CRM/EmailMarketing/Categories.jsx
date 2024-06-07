import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import {
  StyledCategoryItem,
  StyledCategoryItemIcon,
  StyledCategoryText,
} from './index.styled';

const Categories = (props) => {
  const { category } = props;

  return (
    <>
      <StyledCategoryItem>
        <StyledCategoryItemIcon
          style={{
            backgroundColor: category.fill,
          }}
        />
        <Typography.Title level={5} style={{ fontSize: 14, marginBottom: 0 }}>
          {category.value}
        </Typography.Title>
      </StyledCategoryItem>
      <StyledCategoryText>{category.name}</StyledCategoryText>
    </>
  );
};

export default Categories;

Categories.propTypes = {
  category: PropTypes.object.isRequired,
};

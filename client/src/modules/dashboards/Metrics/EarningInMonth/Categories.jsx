import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledEarningMonthCategories,
  StyledEarningMonthCategoriesItem,
} from './index.styled';

const Categories = ({ data }) => {
  return (
    <StyledEarningMonthCategories>
      {data.map((item) => {
        return (
          <StyledEarningMonthCategoriesItem key={item.id}>
            <span className='dot' style={{ backgroundColor: item.color }} />
            <p>{item.name}</p>
          </StyledEarningMonthCategoriesItem>
        );
      })}
    </StyledEarningMonthCategories>
  );
};

export default Categories;

Categories.defaultProps = {
  data: [],
};

Categories.propTypes = {
  data: PropTypes.array,
};

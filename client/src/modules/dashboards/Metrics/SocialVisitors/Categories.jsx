import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledSocialVisitorCategories,
  StyledSocialVisitorCategoryItem,
  StyledSocialVisitorCategoryTitle,
} from './index.styled';

const Categories = ({ data }) => {
  return (
    <StyledSocialVisitorCategories>
      {data.map((item) => {
        return (
          <StyledSocialVisitorCategoryItem key={item.id}>
            <StyledSocialVisitorCategoryTitle>
              <span className='dot' style={{ backgroundColor: item.color }} />
              <p className='categories-title'>{item.visitors}</p>
            </StyledSocialVisitorCategoryTitle>
            <p>{item.name}</p>
          </StyledSocialVisitorCategoryItem>
        );
      })}
    </StyledSocialVisitorCategories>
  );
};

export default Categories;

Categories.defaultProps = {
  data: [],
};

Categories.propTypes = {
  data: PropTypes.array,
};

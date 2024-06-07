import React from 'react';
import PropTypes from 'prop-types';
import CategoriesItem from './CategoriesItem';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppList from '@crema/components/AppList';
import { StyledRecentPost, StyledTitle3Non } from '../RecentPost/index.styled';

const Categories = ({ categories }) => {
  return (
    <StyledRecentPost>
      <StyledTitle3Non>
        <IntlMessages id='dashboard.categories' />
      </StyledTitle3Non>
      <div
        style={{
          position: 'relative',
        }}
      >
        <AppList
          data={categories}
          renderItem={(categories, index) => (
            <CategoriesItem key={index} categories={categories} />
          )}
        />
      </div>
    </StyledRecentPost>
  );
};

export default Categories;

Categories.propTypes = {
  categories: PropTypes.array,
};

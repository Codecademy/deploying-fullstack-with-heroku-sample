import React from 'react';
import PropTypes from 'prop-types';
import { StyledSecondaryText2, StyledText } from '../RecentPost/index.styled';

const CategoriesItem = ({ categories }) => {
  return (
    <StyledSecondaryText2>
      <p>{categories.title}</p>
      <StyledText>{categories.number}</StyledText>
    </StyledSecondaryText2>
  );
};

export default CategoriesItem;

CategoriesItem.propTypes = {
  categories: PropTypes.object,
};

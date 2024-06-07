import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledSuggestionAvatar,
  StyledSuggestionItem,
  StyledSuggestionItemContent,
} from './index.styled';

const SuggestionItem = ({ item }) => {
  return (
    <StyledSuggestionItem className='item-hover'>
      <StyledSuggestionAvatar src={item.thumb} alt={item.name} />
      <StyledSuggestionItemContent>
        <h4>{item.name}</h4>
        <p>{item.desc}</p>
      </StyledSuggestionItemContent>
    </StyledSuggestionItem>
  );
};

export default SuggestionItem;

SuggestionItem.propTypes = {
  item: PropTypes.object,
};

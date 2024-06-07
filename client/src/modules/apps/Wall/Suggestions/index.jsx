import React from 'react';
import AppList from '@crema/components/AppList';
import SuggestionItem from './SuggestionItem';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { StyledSuggestionAction, StyledSuggestionCard } from './index.styled';

const Suggestions = ({ suggestions }) => {
  const { messages } = useIntl();
  return (
    <StyledSuggestionCard
      className='no-card-space-ltr-rtl'
      title={messages['wall.suggestions']}
      actions={[
        <StyledSuggestionAction key={1}>View More</StyledSuggestionAction>,
      ]}
    >
      <AppList
        data={suggestions}
        renderItem={(item, index) => <SuggestionItem key={index} item={item} />}
      />
    </StyledSuggestionCard>
  );
};

export default Suggestions;

Suggestions.propTypes = {
  suggestions: PropTypes.array,
};

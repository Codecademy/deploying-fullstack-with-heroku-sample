import React from 'react';
import PropTypes from 'prop-types';
import StoriesItem from './StoriesItem';
import { useIntl } from 'react-intl';
import {
  StyledStoriesCard,
  StyledStoriesCol,
  StyledStoriesRow,
} from './index.styled';

const Stories = ({ stories }) => {
  const { messages } = useIntl();

  return (
    <StyledStoriesCard
      title={messages['wall.stories']}
      extra={<a href='#/'>{messages['common.viewAll']}</a>}
    >
      <StyledStoriesRow>
        {stories.map((data) => (
          <StyledStoriesCol key={data.id}>
            <StoriesItem data={data} />
          </StyledStoriesCol>
        ))}
      </StyledStoriesRow>
    </StyledStoriesCard>
  );
};

export default Stories;

Stories.propTypes = {
  stories: PropTypes.array,
};

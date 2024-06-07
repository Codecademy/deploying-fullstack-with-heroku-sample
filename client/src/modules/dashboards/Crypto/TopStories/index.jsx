import React from 'react';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import StoriesItem from './StoriesItem';
import PropTypes from 'prop-types';
import AppScrollbar from '@crema/components/AppScrollbar';
import { StyledStoryWrapper } from './index.styled';

const TopStories = ({ stories }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['dashboard.crypto.topStories']}
      extra={<a href='#'>{messages['common.viewAll']}</a>}
    >
      <AppScrollbar style={{ maxHeight: 388, px: 5 }}>
        <StyledStoryWrapper>
          {stories.map((stories, index) => (
            <div key={index} className='stories-item'>
              <StoriesItem stories={stories} />
            </div>
          ))}
        </StyledStoryWrapper>
      </AppScrollbar>
    </AppCard>
  );
};

export default TopStories;

TopStories.propTypes = {
  stories: PropTypes.array,
};

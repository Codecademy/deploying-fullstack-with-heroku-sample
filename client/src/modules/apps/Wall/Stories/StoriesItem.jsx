import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledStoriesCardMedia,
  StyledStoriesItemCard,
  StyledStoriesUserInfo,
  StyledStoriesUserInfoAvatar,
  StyledStoriesUserInfoTitle,
} from './index.styled';

const StoriesItem = ({ data }) => {
  const { imgSrc, avatar, title } = data;
  return (
    <StyledStoriesItemCard>
      <StyledStoriesCardMedia src={imgSrc} alt='Stories 1' />
      <StyledStoriesUserInfo>
        <StyledStoriesUserInfoAvatar src={avatar} alt='Avatar' />
        <StyledStoriesUserInfoTitle className='text-truncate'>
          {title}
        </StyledStoriesUserInfoTitle>
      </StyledStoriesUserInfo>
    </StyledStoriesItemCard>
  );
};

export default StoriesItem;

StoriesItem.propTypes = {
  data: PropTypes.object,
};

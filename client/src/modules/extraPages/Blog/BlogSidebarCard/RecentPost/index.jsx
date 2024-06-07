import React from 'react';
import RecentPostItem from './RecentPostItem';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppList from '@crema/components/AppList';
import {
  StyledContainer,
  StyledRecentPost,
  StyledTitle3,
} from './index.styled';

const RecentPost = ({ recentPost }) => {
  return (
    <StyledRecentPost>
      <StyledTitle3>
        <IntlMessages id='extraPages.recentPost' />
      </StyledTitle3>
      <StyledContainer>
        <AppList
          data={recentPost}
          renderItem={(post, index) => (
            <div
              className={`recent-post-item ${
                index + 1 === recentPost.length ? 'last-child' : ''
              }`}
              key={index}
            >
              <RecentPostItem recentPost={post} />
            </div>
          )}
        />
      </StyledContainer>
    </StyledRecentPost>
  );
};

export default RecentPost;

RecentPost.propTypes = {
  recentPost: PropTypes.array,
};

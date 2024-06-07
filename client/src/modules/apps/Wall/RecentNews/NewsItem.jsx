import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledNewsAvatar,
  StyledRecentNewsItem,
  StyledRecentNewsItemContent,
  StyledRecentNewsItewLink,
} from './index.styled';

const NewsItem = ({ item }) => {
  return (
    <StyledRecentNewsItem className='item-hover'>
      <StyledNewsAvatar src={item.user.profilePic} />
      <StyledRecentNewsItemContent>
        <h4>{item.title}</h4>
        <p>
          {item.desc}
          <StyledRecentNewsItewLink>Read More</StyledRecentNewsItewLink>
        </p>
      </StyledRecentNewsItemContent>
    </StyledRecentNewsItem>
  );
};

export default NewsItem;

NewsItem.propTypes = {
  item: PropTypes.object,
};

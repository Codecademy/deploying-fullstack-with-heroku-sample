import React from 'react';
import { useIntl } from 'react-intl';
import RecentPost from './RecentPost';
import PropTypes from 'prop-types';
import Categories from './Categories';
import TagCloud from './TagCloud';
import AppCard from '@crema/components/AppCard';
import { StyledSidebarBox } from './index.styled';
import { Input } from 'antd';

const BlogSidebarCard = ({ blogSidebar }) => {
  const { messages } = useIntl();

  return (
    <AppCard>
      <StyledSidebarBox>
        <Input.Search
          style={{ width: '100%' }}
          placeholder={messages['common.searchHere']}
        />
      </StyledSidebarBox>
      <RecentPost recentPost={blogSidebar.recentPost} />
      <Categories categories={blogSidebar.categories} />
      <TagCloud tag={blogSidebar.tag} />
    </AppCard>
  );
};

export default BlogSidebarCard;

BlogSidebarCard.propTypes = {
  blogSidebar: PropTypes.object,
};

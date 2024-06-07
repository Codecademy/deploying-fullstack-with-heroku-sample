import React from 'react';
import PropTypes from 'prop-types';
import { AiFillHeart } from 'react-icons/ai';
import Tag from '../Tag';
import AppCard from '@crema/components/AppCard';
import { Avatar, Dropdown } from 'antd';
import {
  StyledButton,
  StyledDuration,
  StyledFlex,
  StyledFlexIconWrapper,
  StyledSecondary,
  StyledTag,
  StyledTitle3,
} from './index.styled';
import { FiMoreVertical } from 'react-icons/fi';

const BlogCard = ({ blog, onViewBlogDetail }) => {
  const items = [
    {
      key: 311,
      label: 'View Blog',
    },
    {
      key: 312,
      label: 'Edit Blog',
    },
  ];

  const onMenuClick = ({ item, key }) => {
    console.log('item', item);
    switch (key) {
      case '311':
        onViewBlogDetail(blog);
        break;
      case '312':
        onViewBlogDetail(blog, true);
        break;
      default:
        break;
    }
  };

  return (
    <AppCard
      style={{ height: '100%', position: 'relative' }}
      cover={<img src={blog.blogDetailContent.cardMedia} alt='Blog' />}
    >
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <StyledDuration>{blog.duration}</StyledDuration>
        <StyledTitle3>{blog.blogDetailContent.title}</StyledTitle3>
        <StyledSecondary>{blog.blogDetailContent.description}</StyledSecondary>
        {blog.blogDetailContent.tag ? (
          <div>
            <Tag tag={blog.blogDetailContent.tag} />
          </div>
        ) : null}
        <StyledFlex>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div style={{ marginRight: 8 }}>
              <Avatar
                size={30}
                src={blog.blogDetailContent.post.user}
                alt={blog.blogDetailContent.post.userName}
              />
            </div>
            <span style={{ fontSize: 12 }}>
              By {blog.blogDetailContent.post.userName}
            </span>
          </div>
          <StyledFlexIconWrapper>
            <AiFillHeart /> {blog.blogDetailContent.likeCount}
          </StyledFlexIconWrapper>
        </StyledFlex>
      </div>
      <div style={{ position: 'absolute', top: 10, right: 0, display: 'flex' }}>
        <StyledTag>{blog.cardMediaAction}</StyledTag>
        <Dropdown trigger={['click']} menu={{ items, onClick: onMenuClick }}>
          <StyledButton shape='circle'>
            <FiMoreVertical size={22} />
          </StyledButton>
        </Dropdown>
      </div>
    </AppCard>
  );
};

export default BlogCard;

BlogCard.propTypes = {
  blog: PropTypes.object,
  onViewBlogDetail: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledFollowAvatar,
  StyledFollowItem,
  StyledFollowItemBtn,
  StyledFollowItemContent,
  StyledFollowItemContentTitle,
  StyledFollowItemIcon,
  StyledFollowItemInfo,
} from './index.styled';

const FollowItem = ({ item }) => {
  return (
    <StyledFollowItem className='item-hover'>
      <StyledFollowAvatar src={item.profilePic} />
      <StyledFollowItemInfo>
        <StyledFollowItemContent>
          <StyledFollowItemContentTitle>
            <h5>{item.title}</h5>
            <StyledFollowItemIcon />
          </StyledFollowItemContentTitle>
          <p>{item.subTitle}</p>
        </StyledFollowItemContent>
        <StyledFollowItemBtn>Follow</StyledFollowItemBtn>
      </StyledFollowItemInfo>
    </StyledFollowItem>
  );
};

export default FollowItem;

FollowItem.propTypes = {
  item: PropTypes.object,
};

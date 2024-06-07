import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  StyledFaqSidebarIcon,
  StyledFaqSidebarListItem,
} from '../index.styled';

const SideBarItem = ({ item, onGetFaqData, selectionId }) => {
  return (
    <StyledFaqSidebarListItem
      className={clsx({
        active: item.id === selectionId,
      })}
      onClick={() => onGetFaqData(item.id)}
    >
      <StyledFaqSidebarIcon>{item.icon}</StyledFaqSidebarIcon>
      <p>{item.name}</p>
    </StyledFaqSidebarListItem>
  );
};

export default SideBarItem;

SideBarItem.propTypes = {
  item: PropTypes.object,
  selectionId: PropTypes.number,
  onGetFaqData: PropTypes.func,
};

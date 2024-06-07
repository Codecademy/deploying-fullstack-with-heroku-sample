import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  FaRegCheckCircle,
  FaRegEnvelope,
  FaRegEnvelopeOpen,
  FaRegStar,
} from 'react-icons/fa';
import { BiArchiveIn, BiCalendarMinus, BiUser } from 'react-icons/bi';
import {
  AiOutlineDelete,
  AiOutlineSchedule,
  AiOutlineSend,
  AiOutlineStop,
} from 'react-icons/ai';
import { FiInfo, FiRefreshCw } from 'react-icons/fi';

import {
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
} from './index.styled';
import { MdOutlineCancel, MdOutlinePayment } from 'react-icons/md';

const getIconByName = (iconName) => {
  switch (iconName) {
    case 'sent':
      return <AiOutlineSend />;
    case 'paid':
      return <MdOutlinePayment />;
    case 'declined':
      return <AiOutlineStop />;
    case 'cancelled':
      return <MdOutlineCancel />;
    case 'check-circle':
      return <FaRegCheckCircle />;
    case 'envelope':
      return <FaRegEnvelope />;
    case 'star':
      return <FaRegStar />;
    case 'calendar-minus':
      return <BiCalendarMinus />;
    case 'user':
      return <BiUser />;
    case 'clock':
      return <AiOutlineSchedule />;
    case 'envelope-open':
      return <FaRegEnvelopeOpen />;
    case 'trash-alt':
      return <AiOutlineDelete />;
    case 'file-archive':
      return <BiArchiveIn />;
    case 'question-circle':
      return <FiInfo />;
    case 'clone':
      return <FiRefreshCw />;
  }
};

const AppsSideBarFolderItem = ({ item, path }) => {
  return (
    <StyledListItem key={item.id}>
      <NavLink to={path}>
        <StyledListItemIcon>{getIconByName(item.icon)}</StyledListItemIcon>
        <StyledListItemText>{item.name}</StyledListItemText>
      </NavLink>
    </StyledListItem>
  );
};

export default AppsSideBarFolderItem;

AppsSideBarFolderItem.propTypes = {
  item: PropTypes.object,
  path: PropTypes.string,
};

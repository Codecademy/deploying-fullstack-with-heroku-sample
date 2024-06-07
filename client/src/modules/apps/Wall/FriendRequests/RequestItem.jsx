import React from 'react';
import PropTypes from 'prop-types';
import { getTimeFromNow } from '@crema/helpers/DateHelper';
import {
  StyledRequestAvatar,
  StyledRequestItem,
  StyledRequestItemContent,
  StyledRequestItemInfo,
} from './index.styled';

const RequestItem = ({ request }) => {
  return (
    <StyledRequestItem className='item-hover'>
      <StyledRequestAvatar src={request.profilePic} />
      <StyledRequestItemInfo>
        <StyledRequestItemContent>
          <h4>{request.name}</h4>
          <p>{getTimeFromNow(request.date)}</p>
        </StyledRequestItemContent>
      </StyledRequestItemInfo>
    </StyledRequestItem>
  );
};

export default RequestItem;

RequestItem.propTypes = {
  request: PropTypes.object,
};

import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import Members from './Members';
import Labels from './Labels';
import { MdChatBubbleOutline } from 'react-icons/md';
import {
  StyledIoMdAttach,
  StyledScrumBoardCardDetailComment,
  StyledScrumBoardCardDetailDate,
  StyledScrumBoardCardDetails,
  StyledScrumBoardCardDetailTitle,
  StyledScrumBoardCardDetailUser,
  StyledScrumBoardCardHeader,
  StyledScrumBoardCardHeaderAction,
} from './index.styled';

const BoardCard = ({
  title,
  attachments = [],
  label = [],
  members,
  date,
  comments,
  onClick,
}) => {
  return (
    <StyledScrumBoardCardDetails
      onClick={(e) => {
        console.log('clicked');
        onClick(e);
      }}
    >
      <StyledScrumBoardCardHeader>
        <StyledScrumBoardCardDetailTitle>
          {title}
        </StyledScrumBoardCardDetailTitle>
        {attachments && attachments.length > 0 ? (
          <StyledScrumBoardCardHeaderAction>
            <span>{attachments.length}</span>
            <StyledIoMdAttach />
          </StyledScrumBoardCardHeaderAction>
        ) : null}
      </StyledScrumBoardCardHeader>
      {label.length > 0 ? <Labels labels={label} /> : null}

      <StyledScrumBoardCardDetailUser>
        {members.length > 0 ? <Members members={members} /> : null}

        <StyledScrumBoardCardDetailDate>
          {date ? dayjs(date).format('MMM DD').split(',')[0] : null}
        </StyledScrumBoardCardDetailDate>
        {comments && comments.length > 0 ? (
          <StyledScrumBoardCardDetailComment>
            <span>{comments.length}</span>
            <MdChatBubbleOutline />
          </StyledScrumBoardCardDetailComment>
        ) : null}
      </StyledScrumBoardCardDetailUser>
    </StyledScrumBoardCardDetails>
  );
};

export default BoardCard;

BoardCard.defaultProps = {
  list: null,
};

BoardCard.propTypes = {
  title: PropTypes.string,
  attachments: PropTypes.array,
  label: PropTypes.array,
  members: PropTypes.array,
  date: PropTypes.string,
  comments: PropTypes.array,
  onClick: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';
import { BsCardList } from 'react-icons/bs';
import { MdEdit } from 'react-icons/md';
import {
  StyledScrumBoardCard,
  StyledScrumBoardCardText,
  StyledScrumListIcon,
} from './index.styled';

const BoardItem = ({ board, onEditButtonClick, onViewBoardDetail }) => {
  return (
    <StyledScrumBoardCard
      key={board.id}
      onClick={() => onViewBoardDetail(board)}
    >
      <StyledScrumListIcon>
        <BsCardList />
        <MdEdit onClick={() => onEditButtonClick(board)} />
      </StyledScrumListIcon>
      <StyledScrumBoardCardText>{board.name}</StyledScrumBoardCardText>
      <span onClick={(event) => event.stopPropagation()} />
    </StyledScrumBoardCard>
  );
};

export default BoardItem;

BoardItem.propTypes = {
  board: PropTypes.object.isRequired,
  onEditButtonClick: PropTypes.func.isRequired,
  onViewBoardDetail: PropTypes.func,
};

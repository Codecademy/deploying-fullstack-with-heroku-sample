import React from 'react';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import { MdAdd } from 'react-icons/md';
import {
  StyledScrumBoardAddIcon,
  StyledScrumBoardAddList,
  StyledScrumBoardAddListCard,
  StyledScrumBoardAddText,
} from './index.styled';

const NewListButton = (props) => {
  const { onClick } = props;

  return (
    <StyledScrumBoardAddListCard>
      <StyledScrumBoardAddList>
        <StyledScrumBoardAddIcon onClick={onClick}>
          <MdAdd />
        </StyledScrumBoardAddIcon>
        <StyledScrumBoardAddText>
          <IntlMessages id='scrumboard.addAList' />
        </StyledScrumBoardAddText>
      </StyledScrumBoardAddList>
    </StyledScrumBoardAddListCard>
  );
};

export default NewListButton;

NewListButton.propTypes = {
  onClick: PropTypes.func,
};

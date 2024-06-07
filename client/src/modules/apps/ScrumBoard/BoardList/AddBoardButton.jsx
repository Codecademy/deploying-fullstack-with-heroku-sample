import React from 'react';
import { MdAdd } from 'react-icons/md';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import {
  StyledScrumBoardAddcard,
  StyledScrumBoardAddCardIcon,
  StyledScrumBoardAddCardText,
} from './index.styled';

const AddBoardButton = ({ onAddButtonClick }) => {
  return (
    <StyledScrumBoardAddcard onClick={() => onAddButtonClick()}>
      <StyledScrumBoardAddCardIcon>
        <MdAdd />
      </StyledScrumBoardAddCardIcon>
      <StyledScrumBoardAddCardText>
        <IntlMessages id='scrumboard.addNewBoard' />
      </StyledScrumBoardAddCardText>
    </StyledScrumBoardAddcard>
  );
};

export default AddBoardButton;

AddBoardButton.propTypes = {
  onAddButtonClick: PropTypes.func,
};

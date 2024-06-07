import React from 'react';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';

import {
  StyledSCrumBoardAddBtnCard,
  StyledScrumBoardAddBtnCardText,
  StyledScrumBoardAddCardBtnUser,
  StyledScrumBoardAddCardUserAvatar,
  StyledScrumBoardMdAdd,
} from './index.styled';

const AddCardButton = (props) => {
  return (
    <StyledSCrumBoardAddBtnCard onClick={() => props.t(props.laneId)}>
      <StyledScrumBoardAddCardBtnUser>
        <StyledScrumBoardAddCardUserAvatar>
          <StyledScrumBoardMdAdd />
        </StyledScrumBoardAddCardUserAvatar>
        <StyledScrumBoardAddBtnCardText>
          <IntlMessages id='scrumboard.addACard' />
        </StyledScrumBoardAddBtnCardText>
      </StyledScrumBoardAddCardBtnUser>
    </StyledSCrumBoardAddBtnCard>
  );
};

export default AddCardButton;

AddCardButton.propTypes = {
  t: PropTypes.func,
  laneId: PropTypes.number.isRequired,
};

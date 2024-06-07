import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import { AiOutlineDelete } from 'react-icons/ai';
import { Button } from 'antd';
import AppIconButton from '@crema/components/AppIconButton';
import {
  StyledScrumBoardCardCheckList,
  StyledScrumBoardCardCheckListHeader,
  StyledScrumBoardCardCheckListItem,
  StyledScrumBoardCheckbox,
  StyledScrumBoardInput,
} from './index.styled';

const CardCheckedList = (props) => {
  const {
    onAddNewCheckedItem,
    checkedList,
    onSetCheckedItemText,
    onDeleteCheckedItem,
  } = props;

  return (
    <StyledScrumBoardCardCheckList>
      <StyledScrumBoardCardCheckListHeader>
        <h4>
          <IntlMessages id='scrumboard.checkedLists' />
        </h4>

        <Button ghost type='primary' onClick={() => onAddNewCheckedItem()}>
          <IntlMessages id='scrumboard.addNew' />
        </Button>
      </StyledScrumBoardCardCheckListHeader>

      {checkedList.map((checkedItem) => {
        return (
          <StyledScrumBoardCardCheckListItem key={checkedItem.id}>
            <StyledScrumBoardCheckbox />
            <StyledScrumBoardInput
              value={checkedItem.title}
              onChange={(e) =>
                onSetCheckedItemText(e.target.value, checkedItem.id)
              }
            />
            <AppIconButton
              icon={<AiOutlineDelete />}
              onClick={() => onDeleteCheckedItem(checkedItem.id)}
            />
          </StyledScrumBoardCardCheckListItem>
        );
      })}
    </StyledScrumBoardCardCheckList>
  );
};

export default CardCheckedList;

CardCheckedList.defaultProps = {
  checkedList: [],
};

CardCheckedList.propTypes = {
  onAddNewCheckedItem: PropTypes.func,
  checkedList: PropTypes.array,
  onSetCheckedItemText: PropTypes.func,
  onDeleteCheckedItem: PropTypes.func,
};

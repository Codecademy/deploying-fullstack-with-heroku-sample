import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import { HiCheck } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { Input } from 'antd';
import AppIconButton from '@crema/components/AppIconButton';
import {
  StyledScrumBoardListHeaderCard,
  StyledScrumBoardListHeaderFlex,
  StyledScrumBoardListHeaderFlexAuto,
  StyledScrumListHeaderList,
} from './index.styled';
import AppConfirmationModal from '@crema/components/AppConfirmationModal';

const ListHeader = (props) => {
  const { name, id, onDelete, updateTitle } = props;

  const [isEditListName, setEditListName] = useState(false);

  const [editedListName, setEditedListName] = useState('');

  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const onDeleteBoardList = () => {
    onDelete(id);
    setDeleteDialogOpen(false);
  };

  const onEditButtonClick = () => {
    setEditedListName(name);
    setEditListName(!isEditListName);
  };

  const onEditListName = () => {
    if (editedListName !== '') {
      updateTitle(editedListName);
      setEditListName(false);
    }
  };

  return (
    <StyledScrumBoardListHeaderCard>
      <StyledScrumBoardListHeaderFlex>
        {!isEditListName ? (
          <>
            <h5>{name}</h5>
            <StyledScrumBoardListHeaderFlexAuto>
              <AppIconButton
                icon={<AiOutlineEdit />}
                onClick={onEditButtonClick}
              />

              <AppIconButton
                icon={<AiOutlineDelete />}
                onClick={() => setDeleteDialogOpen(true)}
              />
            </StyledScrumBoardListHeaderFlexAuto>
          </>
        ) : (
          <>
            <StyledScrumListHeaderList>
              <Input
                label={<IntlMessages id='scrumboard.listTitle' />}
                value={editedListName}
                onChange={(event) => setEditedListName(event.target.value)}
              />
            </StyledScrumListHeaderList>
            <StyledScrumBoardListHeaderFlexAuto>
              <AppIconButton icon={<HiCheck />} onClick={onEditListName} />
              <AppIconButton
                icon={<CgClose />}
                onClick={() => setEditListName(false)}
              />
            </StyledScrumBoardListHeaderFlexAuto>
          </>
        )}
      </StyledScrumBoardListHeaderFlex>

      {isDeleteDialogOpen ? (
        <AppConfirmationModal
          open={isDeleteDialogOpen}
          onDeny={setDeleteDialogOpen}
          onConfirm={onDeleteBoardList}
          title={<IntlMessages id='scrumboard.deleteMessage' />}
          dialogTitle={<IntlMessages id='common.deleteItem' />}
        />
      ) : null}
    </StyledScrumBoardListHeaderCard>
  );
};

export default ListHeader;

ListHeader.propTypes = {
  boardId: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onDelete: PropTypes.func,
  updateTitle: PropTypes.func,
};

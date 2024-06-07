import React, { useState } from 'react';

import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { useIntl } from 'react-intl';
import {
  StyledScrumAddBoardCard,
  StyledScrumAddBoardFooterBtn,
  StyledScrumBoardAddModal,
} from './index.styled';

const AddNewBoard = ({
  isModalVisible,
  handleCancel,
  onAddBoard,
  selectedBoard,
  handleOk,
}) => {
  const [boardName, setBoardName] = useState(() =>
    selectedBoard ? selectedBoard.name : '',
  );

  const onClickAddButton = () => {
    if (boardName !== '') {
      onAddBoard(boardName);
      setBoardName('');
      handleCancel();
    }
  };
  const { messages } = useIntl();

  return (
    <StyledScrumBoardAddModal
      title={messages['scrumboard.addNewBoard']}
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={
        <StyledScrumAddBoardFooterBtn type='primary' onClick={onClickAddButton}>
          <IntlMessages id='common.add' />
        </StyledScrumAddBoardFooterBtn>
      }
    >
      <StyledScrumAddBoardCard>
        <Input
          placeholder='Basic usage'
          label={<IntlMessages id='scrumboard.boardTitle' />}
          value={boardName}
          onChange={(event) => setBoardName(event.target.value)}
        />
      </StyledScrumAddBoardCard>
    </StyledScrumBoardAddModal>
  );
};

export default AddNewBoard;

AddNewBoard.defaultProps = {
  selectedBoard: null,
};

AddNewBoard.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  onAddBoard: PropTypes.func,
  handleOk: PropTypes.func,
  selectedBoard: PropTypes.node,
};

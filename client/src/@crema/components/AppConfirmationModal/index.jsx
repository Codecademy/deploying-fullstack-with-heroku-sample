import React from 'react';
import { Modal } from 'antd';

import PropTypes from 'prop-types';
import { StyledParaText } from './index.styled';

const AppConfirmationModal = ({
  open,
  onDeny,
  onConfirm,
  paragraph,
  modalTitle,
}) => {
  return (
    <Modal
      title={modalTitle}
      open={open}
      onOk={onConfirm}
      onCancel={() => onDeny(false)}
    >
      <StyledParaText>{paragraph}</StyledParaText>
    </Modal>
  );
};

AppConfirmationModal.propTypes = {
  modalTitle: PropTypes.any.isRequired,
  open: PropTypes.bool.isRequired,
  onDeny: PropTypes.func.isRequired,
  paragraph: PropTypes.any,
  onConfirm: PropTypes.func.isRequired,
};

AppConfirmationModal.defaultProps = {
  paragraph: 'Are you sure you want to delete?',
};
export default AppConfirmationModal;

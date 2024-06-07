import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import ConfirmationModal from '../AppConfirmationModal';
import AppIconButton from '../AppIconButton';

const AppsDeleteIcon = ({ deleteAction }) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <>
      <AppIconButton
        title='Trash'
        icon={<AiOutlineDelete />}
        onClick={() => {
          setDeleteModalOpen(true);
        }}
      />
      {isDeleteModalOpen ? (
        <ConfirmationModal
          open={isDeleteModalOpen}
          paragraph={'Are you sure you want to delete this?'}
          onDeny={setDeleteModalOpen}
          onConfirm={deleteAction}
          modalTitle={<IntlMessages id='common.deleteItem' />}
        />
      ) : null}
    </>
  );
};

export default AppsDeleteIcon;
AppsDeleteIcon.propTypes = {
  deleteAction: PropTypes.func,
  deleteTitle: PropTypes.any,
};

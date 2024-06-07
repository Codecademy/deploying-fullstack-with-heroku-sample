import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import { StyledContactHeaderCheckboxView } from '../index.styled';
import { useContactContext } from '../../../context/ContactContextProvider';

const CheckBox = ({ checkedContacts, setCheckedContacts }) => {
  const { contactList } = useContactContext();
  const onHandleMasterCheckbox = (event) => {
    if (event.target.checked) {
      const contactIds = contactList?.data?.map((contact) => contact.id);
      setCheckedContacts(contactIds);
    } else {
      setCheckedContacts([]);
    }
  };

  return (
    <StyledContactHeaderCheckboxView>
      <Checkbox
        color='primary'
        indeterminate={
          checkedContacts.length > 0 &&
          checkedContacts.length < contactList?.data?.length
        }
        checked={
          contactList?.data?.length > 0 &&
          checkedContacts.length === contactList?.data?.length
        }
        onChange={onHandleMasterCheckbox}
      />
    </StyledContactHeaderCheckboxView>
  );
};

export default CheckBox;

CheckBox.propTypes = {
  checkedContacts: PropTypes.array.isRequired,
  setCheckedContacts: PropTypes.func,
};

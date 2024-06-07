import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import CheckBox from './CheckBox';
import ContactCheckedActions from './ContactCheckedActions';
import {
  StyledContactContentHeader,
  StyledContactHeaderPagination,
  StyledContactSearch,
} from '../index.styled';
import ViewSelectButtons from './ViewSelectButtons';
import {
  useContactActionsContext,
  useContactContext,
} from '../../../context/ContactContextProvider';

const ContactHeader = (props) => {
  const {
    checkedContacts,
    setCheckedContacts,
    filterText,
    onSetFilterText,
    onSelectContactsForDelete,
    onUpdateContacts,
  } = props;

  const { page, pageView, contactList } = useContactContext();
  const { onPageChange, setPageView } = useContactActionsContext();
  const { messages } = useIntl();
  console.log('page', page);
  console.log('count', contactList?.count);
  return (
    <>
      <StyledContactContentHeader>
        <CheckBox
          checkedContacts={checkedContacts}
          setCheckedContacts={setCheckedContacts}
        />

        {checkedContacts.length > 0 ? (
          <ContactCheckedActions
            onSelectContactsForDelete={onSelectContactsForDelete}
            checkedContacts={checkedContacts}
            onUpdateContacts={onUpdateContacts}
            setCheckedContacts={setCheckedContacts}
          />
        ) : null}

        <StyledContactSearch
          value={filterText}
          onChange={(event) => onSetFilterText(event.target.value)}
          placeholder={messages['common.searchHere']}
        />

        <ViewSelectButtons pageView={pageView} onChangePageView={setPageView} />
      </StyledContactContentHeader>
      {contactList?.data?.length > 0 ? (
        <StyledContactHeaderPagination
          count={contactList?.count}
          page={page}
          onChange={onPageChange}
        />
      ) : null}
    </>
  );
};

export default ContactHeader;

ContactHeader.defaultProps = {
  checkedContacts: [],
  filterText: '',
  page: 0,
};

ContactHeader.propTypes = {
  checkedContacts: PropTypes.array,
  setCheckedContacts: PropTypes.func,
  filterText: PropTypes.string,
  onSetFilterText: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
  page: PropTypes.number,
  apiData: PropTypes.any,
  onChange: PropTypes.func,
  pageView: PropTypes.string,
  onChangePageView: PropTypes.func,
  onUpdateContacts: PropTypes.func,
};

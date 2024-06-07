import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import {
  StyledContactDetailModalItemTitle,
  StyledContactNote,
} from './index.styled';

const { TextArea } = Input;

const Notes = (props) => {
  const { contact } = props;
  const { messages } = useIntl();

  return (
    <StyledContactNote>
      <StyledContactDetailModalItemTitle>
        <IntlMessages id='common.notes' />
      </StyledContactDetailModalItemTitle>

      <TextArea
        rows={4}
        placeholder={messages['common.notes']}
        name='notes'
        value={contact.notes}
      />
    </StyledContactNote>
  );
};

export default Notes;

Notes.propTypes = {
  contact: PropTypes.object.isRequired,
};

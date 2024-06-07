import React from 'react';
import PropTypes from 'prop-types';
import { MdLabelOutline } from 'react-icons/md';
import {
  StyledContactLabelItem,
  StyledContactSidebarLabelItem,
} from './index.styled';

const LabelItem = ({ label }) => {
  return (
    <div key={label.id}>
      <StyledContactSidebarLabelItem to={`/apps/contact/label/${label.alias}`}>
        <StyledContactLabelItem>
          <MdLabelOutline style={{ color: `${label.color}` }} />
        </StyledContactLabelItem>
        {label.name}
      </StyledContactSidebarLabelItem>
    </div>
  );
};

export default LabelItem;

LabelItem.propTypes = {
  label: PropTypes.object.isRequired,
};

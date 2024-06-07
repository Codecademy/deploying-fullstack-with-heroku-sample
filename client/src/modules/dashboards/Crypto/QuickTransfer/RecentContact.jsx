import React from 'react';
import PropTypes from 'prop-types';
import { StyledAvatar, StyledAvatarWrapper } from './index.styled';

const RecentContact = ({ recentContact }) => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <StyledAvatarWrapper>
        <StyledAvatar src={recentContact.image} alt={recentContact.name} />
      </StyledAvatarWrapper>
      <div
        style={{
          whiteSpace: 'nowrap',
        }}
      >
        {recentContact.name}
      </div>
    </div>
  );
};

export default RecentContact;

RecentContact.propTypes = {
  recentContact: PropTypes.object.isRequired,
};

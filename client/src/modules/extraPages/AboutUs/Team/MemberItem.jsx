import React from 'react';
import PropTypes from 'prop-types';
import { StyledAppCard, StyledTeamDesc, StyledTeamTitle } from './index.styled';

const MemberItem = ({ member }) => {
  return (
    <StyledAppCard cover={<img alt='MemberItem' src={member.srcImg} />}>
      <StyledTeamTitle level={5}>{member.name}</StyledTeamTitle>
      <StyledTeamDesc>{member.position}</StyledTeamDesc>
    </StyledAppCard>
  );
};

export default MemberItem;

MemberItem.propTypes = {
  member: PropTypes.object,
};

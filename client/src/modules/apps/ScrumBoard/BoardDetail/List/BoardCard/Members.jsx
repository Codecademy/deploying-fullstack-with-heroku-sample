import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import {
  StyledScrumBoardMember,
  StyledScrumBoardMemberAvatar,
} from './index.styled';

const Members = (props) => {
  const { members } = props;

  return (
    <StyledScrumBoardMember>
      {members.map((member) => {
        return (
          <Tooltip title={member.name} key={member.id}>
            {member.image ? (
              <StyledScrumBoardMemberAvatar src={member.image} alt='created' />
            ) : (
              <StyledScrumBoardMemberAvatar>
                {member.name[0].toUpperCase()}
              </StyledScrumBoardMemberAvatar>
            )}
          </Tooltip>
        );
      })}
    </StyledScrumBoardMember>
  );
};

export default Members;

Members.propTypes = {
  members: PropTypes.array.isRequired,
};

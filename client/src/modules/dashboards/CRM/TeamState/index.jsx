import React from 'react';
import AppCard from '@crema/components/AppCard';
import { Avatar, Switch } from 'antd';
import PropTypes from 'prop-types';

import {
  StyledContainer,
  StyledContainerMb,
  StyledFlex,
  StyledFlexWrapper,
  StyledIconBtnRoot,
  StyledSecondaryText,
  StyledTitle,
  StyledTitleWrapper,
} from './index.styled';
import { MdEdit } from 'react-icons/md';
import { BsArrowUpRight } from 'react-icons/bs';

const TeamState = ({ data }) => {
  return (
    <AppCard>
      <StyledFlexWrapper>
        <StyledSecondaryText>
          <StyledTitle level={3}>{data.name}</StyledTitle>
          <span>{data.duration}</span>
        </StyledSecondaryText>
        <Switch defaultChecked={data.status} />
      </StyledFlexWrapper>

      <StyledContainerMb>
        {data.tags.map((data, index) => (
          <StyledTitleWrapper
            key={'team-' + index}
            style={{ backgroundColor: data.color + '21', color: data.color }}
          >
            <span className='title'>{data.title}</span>
          </StyledTitleWrapper>
        ))}
      </StyledContainerMb>

      <StyledFlex>
        <Avatar.Group
          maxCount={2}
          maxStyle={{ color: '#fff', backgroundColor: '#2997ff99' }}
        >
          {data.members.map((data, index) => (
            <Avatar
              size={40}
              key={'member-' + index}
              alt={data.name}
              src={data.image}
            />
          ))}
        </Avatar.Group>

        <StyledContainer>
          <div>
            <StyledIconBtnRoot>
              <MdEdit size={20} />
            </StyledIconBtnRoot>
          </div>

          <div style={{ marginLeft: 6 }}>
            <StyledIconBtnRoot>
              <BsArrowUpRight size={20} />
            </StyledIconBtnRoot>
          </div>
        </StyledContainer>
      </StyledFlex>
    </AppCard>
  );
};

export default TeamState;

TeamState.propTypes = {
  data: PropTypes.object,
};

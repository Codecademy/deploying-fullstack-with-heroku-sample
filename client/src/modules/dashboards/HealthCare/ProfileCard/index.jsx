import React from 'react';
import AppCard from '@crema/components/AppCard';
import { Avatar } from 'antd';
import {
  StyledProfileActionItem,
  StyledProfileActionItemContent,
  StyledProfileActionItemContentRight,
  StyledProfileActionItemTopBorder,
  StyledProfileContent,
  StyledProfileContentAction,
} from './index.styled';

const ProfileCard = () => {
  return (
    <AppCard>
      <StyledProfileContent>
        <Avatar
          style={{ height: 80, width: 80 }}
          src={'/assets/images/avatar/A10.jpg'}
        />
        <h5 className='title'>Talan Phips</h5>

        <StyledProfileContentAction>
          <StyledProfileActionItem>
            <StyledProfileActionItemContentRight>
              <h5>24</h5>
              <p>Years</p>
            </StyledProfileActionItemContentRight>
            <StyledProfileActionItemContent>
              <h5>A+</h5>
              <p>Blood</p>
            </StyledProfileActionItemContent>
          </StyledProfileActionItem>
          <StyledProfileActionItemTopBorder>
            <StyledProfileActionItemContentRight>
              <h5>185 cm</h5>
              <p>Height</p>
            </StyledProfileActionItemContentRight>
            <StyledProfileActionItemContent>
              <h5>84 kg</h5>
              <p>Weight</p>
            </StyledProfileActionItemContent>
          </StyledProfileActionItemTopBorder>
        </StyledProfileContentAction>
      </StyledProfileContent>
    </AppCard>
  );
};

export default ProfileCard;

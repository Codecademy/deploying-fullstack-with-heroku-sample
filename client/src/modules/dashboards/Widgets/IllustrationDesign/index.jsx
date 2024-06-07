import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import { EyeFilled, HeartFilled, MessageFilled } from '@ant-design/icons';
import {
  StyledIllDivider,
  StyledIllustrationAction,
  StyledIllustrationActionItem,
  StyledIllustrationCard,
  StyledIllustrationContent,
  StyledIllustrationImgHeader,
  StyledIlustrationBadge,
} from './index.styled';

const IllustrationDesign = () => {
  return (
    <StyledIllustrationCard heightFull className='no-card-space'>
      <StyledIllustrationImgHeader>
        <img
          className='img-full'
          src={'/assets/images/illustration.png'}
          alt='illustration'
        />
        <StyledIlustrationBadge>
          <IntlMessages id='dashboard.designs' />
        </StyledIlustrationBadge>
      </StyledIllustrationImgHeader>

      <StyledIllustrationContent>
        <h4>
          <IntlMessages id='dashboard.illustrationDesign' />
        </h4>
        <StyledIllDivider />
        <StyledIllustrationAction>
          <StyledIllustrationActionItem>
            <EyeFilled className='ill-middle-icon' />
            11.7 K
          </StyledIllustrationActionItem>
          <StyledIllustrationActionItem>
            <HeartFilled className='ill-middle-icon' />
            2.6 K
          </StyledIllustrationActionItem>
          <StyledIllustrationActionItem>
            <MessageFilled className='ill-middle-icon' />
            345
          </StyledIllustrationActionItem>
        </StyledIllustrationAction>
      </StyledIllustrationContent>
    </StyledIllustrationCard>
  );
};

export default IllustrationDesign;

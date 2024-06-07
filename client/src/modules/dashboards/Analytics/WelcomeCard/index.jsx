import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import { HiOutlineMailOpen } from 'react-icons/hi';
import { BiMessageDetail } from 'react-icons/bi';
import { CgFileDocument } from 'react-icons/cg';
import {
  StyledSpecialTitle,
  StyledWelcomeCard,
  StyledWelcomeCardCol,
  StyledWelcomeCardColContent,
  StyledWelcomeCardColThumb,
  StyledWelcomeCardContainer,
  StyledWelcomeCardContent,
  StyledWelcomeCardHeader,
  StyledWelcomeCardInfo,
  StyledWelcomeCardRow,
  StyledWelcomeCardScroll,
  StyledWelcomeImg,
} from './index.styled';

const getWelcomeIcon = (iconType) => {
  switch (iconType) {
    case 'HiOutlineMailOpen':
      return <HiOutlineMailOpen color='#0A8FDC' className='icon' />;
    case 'BiMessageDetail':
      return <BiMessageDetail color='#0A8FDC' className='icon' />;
    default:
      return <CgFileDocument color='#0A8FDC' className='icon' />;
  }
};

const WelcomeCard = ({ data }) => {
  const { messages } = useIntl();
  return (
    <StyledWelcomeCard>
      <StyledWelcomeCardInfo>
        <StyledWelcomeCardContent>
          <StyledWelcomeCardHeader>
            <h5>{messages['dashboard.analytics.welcome']}</h5>
            <h3>{messages['dashboard.analytics.eddieMassy']}</h3>
          </StyledWelcomeCardHeader>
          <StyledWelcomeCardScroll scrollToTop>
            <StyledWelcomeCardContainer>
              <StyledWelcomeCardRow>
                {data.map((item, index) => (
                  <StyledWelcomeCardCol key={'box-' + index}>
                    <StyledWelcomeCardColThumb>
                      <span className='ant-avatar ant-avatar-circle ant-avatar-image'>
                        {getWelcomeIcon(item.icon)}
                      </span>
                    </StyledWelcomeCardColThumb>
                    <StyledWelcomeCardColContent>
                      <StyledSpecialTitle>{item.counts}</StyledSpecialTitle>
                      <p>{item.type}</p>
                    </StyledWelcomeCardColContent>
                  </StyledWelcomeCardCol>
                ))}
              </StyledWelcomeCardRow>
            </StyledWelcomeCardContainer>
          </StyledWelcomeCardScroll>
        </StyledWelcomeCardContent>
        <StyledWelcomeImg>
          <img alt='welcome' src={'/assets/images/dashboard/welcomImage.svg'} />
        </StyledWelcomeImg>
      </StyledWelcomeCardInfo>
    </StyledWelcomeCard>
  );
};

export default WelcomeCard;

WelcomeCard.defaultProps = {
  data: [],
};

WelcomeCard.propTypes = {
  data: PropTypes.array,
};

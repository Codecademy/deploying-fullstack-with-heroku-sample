import React from 'react';
import PropTypes from 'prop-types';
import { MoreOutlined } from '@ant-design/icons';
import {
  StyledWhatsHappenAction,
  StyledWhatsHappenBtn,
  StyledWhatsHappenItem,
  StyledWhatsHappenItemContent,
  StyledWhatsHappenSpecialText,
  StyledWhatsHappenSubTitle,
  StyledWhatsHappenThumb,
  StyledWhatsHappenTitle,
} from './index.styled';

const WhatsHappenItem = ({ data }) => {
  const { imgSrc, subTitle, title } = data;

  return (
    <StyledWhatsHappenItem className='item-hover'>
      <StyledWhatsHappenThumb>
        <img src={imgSrc} alt='happen img' />
      </StyledWhatsHappenThumb>
      <StyledWhatsHappenItemContent>
        <StyledWhatsHappenSubTitle className='text-truncate'>
          {subTitle}
        </StyledWhatsHappenSubTitle>
        <StyledWhatsHappenTitle className='text-truncate'>
          {title}
        </StyledWhatsHappenTitle>
        <StyledWhatsHappenSpecialText className='text-truncate'>
          {data.tag.map((val) => (
            <span key={val.id}>#{val.name}</span>
          ))}
        </StyledWhatsHappenSpecialText>
      </StyledWhatsHappenItemContent>
      <StyledWhatsHappenAction>
        <StyledWhatsHappenBtn icon={<MoreOutlined />} />
      </StyledWhatsHappenAction>
    </StyledWhatsHappenItem>
  );
};

export default WhatsHappenItem;

WhatsHappenItem.propTypes = {
  data: PropTypes.object,
};

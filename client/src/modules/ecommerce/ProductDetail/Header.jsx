import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import {
  StyledProductDetailHeader,
  StyledProductDetailHeaderContent,
  StyledProductDetailHeaderInfo,
  StyledProductDetailSocial,
  StyledProfileMbText,
  StyledProfileReviewText,
} from './index.styled';

const Header = ({ product }) => {
  const shareUrl = 'http://crema-react.firebaseapp.com/';

  return (
    <StyledProductDetailHeader>
      <StyledProductDetailHeaderInfo>
        <h3>{product.title}</h3>
        <StyledProductDetailHeaderContent>
          <Rate defaultValue={product.rating} disabled />
          <StyledProfileReviewText>
            {product.reviews || 0 + ' reviews'}
          </StyledProfileReviewText>

          <span>
            SKU :{' '}
            <StyledProfileMbText> {product.SKU || 'MB023'}</StyledProfileMbText>
          </span>
        </StyledProductDetailHeaderContent>
      </StyledProductDetailHeaderInfo>

      <StyledProductDetailSocial>
        <LinkedinShareButton url={shareUrl} style={{ marginRight: 10 }}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <FacebookShareButton url={shareUrl} style={{ marginRight: 10 }}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </StyledProductDetailSocial>
    </StyledProductDetailHeader>
  );
};

export default Header;

Header.propTypes = {
  product: PropTypes.object,
};

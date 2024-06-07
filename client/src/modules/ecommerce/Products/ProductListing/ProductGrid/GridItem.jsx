import React, { useState } from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { HeartFilled, HeartOutlined, StarOutlined } from '@ant-design/icons';
import {
  StyledProductGridAction,
  StyledProductGridActionItem,
  StyledProductGridCard,
  StyledProductGridCardHeader,
  StyledProductGridCardHeaderBadge,
  StyledProductGridCardHeaderThumb,
  StyledProductGridCardPara,
  StyledProductGridCardTitle,
  StyledProductListFavorCheck,
} from './index.styled';

const GridItem = (props) => {
  const { item } = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const OnFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <StyledProductGridCard
      className='item-hover'
      onClick={() => {
        navigate('/apps/ecommerce/product_detail/' + item.id);
      }}
    >
      <StyledProductGridCardHeader>
        <StyledProductGridCardHeaderBadge>
          {item.rating}
          <StarOutlined />
        </StyledProductGridCardHeaderBadge>

        <StyledProductGridCardHeaderThumb>
          <img src={item.image[0].src} alt='watch' />
        </StyledProductGridCardHeaderThumb>

        <StyledProductListFavorCheck onClick={OnFavorite}>
          {isFavorite ? <HeartFilled /> : <HeartOutlined />}
        </StyledProductListFavorCheck>
      </StyledProductGridCardHeader>

      <StyledProductGridCardTitle className='text-truncate'>
        {item.title}
      </StyledProductGridCardTitle>

      <StyledProductGridCardPara className='text-truncate'>
        {item.description}
      </StyledProductGridCardPara>

      <StyledProductGridAction>
        <StyledProductGridActionItem>
          $ {+item.mrp - Math.round((+item.mrp * +item.discount) / 100)}
        </StyledProductGridActionItem>
        <StyledProductGridActionItem className='cut'>
          ${item.mrp}
        </StyledProductGridActionItem>
        <StyledProductGridActionItem className='green'>
          {item.discount}% <IntlMessages id='ecommerce.off' />
        </StyledProductGridActionItem>
      </StyledProductGridAction>
    </StyledProductGridCard>
  );
};

export default GridItem;

GridItem.propTypes = {
  item: PropTypes.object.isRequired,
};

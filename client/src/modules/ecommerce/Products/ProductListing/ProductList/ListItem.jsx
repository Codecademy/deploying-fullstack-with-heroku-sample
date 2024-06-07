import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Checkbox, Rate } from 'antd';
import {
  StyledProductListAction,
  StyledProductListActionItem,
  StyledProductListCard,
  StyledProductListCardContent,
  StyledProductListContentPara,
  StyledProductListFavorCheck,
  StyledProductListPrice,
  StyledProductListPriceItem,
  StyledProductListPriceItemText,
  StyledProductListPriceItemValue,
  StyledProductListPriceItemValueCut,
  StyledProductListSlider,
  StyledProductListSliderContent,
  StyledProductListSliderContentHeader,
  StyledProductListSliderThumb,
} from './index.styled';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ListItem = (props) => {
  const { item } = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const OnFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <StyledProductListCard
      className='item-hover'
      onClick={() => {
        navigate('/apps/ecommerce/product_detail/' + item.id);
      }}
    >
      <StyledProductListCardContent>
        <StyledProductListSlider>
          <Slider className='slick-slider-global' {...settings}>
            {item.image.map((img) => {
              return (
                <StyledProductListSliderThumb key={img.id}>
                  <img src={img.src} alt='watch' />
                </StyledProductListSliderThumb>
              );
            })}
          </Slider>
        </StyledProductListSlider>

        <StyledProductListSliderContent>
          <StyledProductListSliderContentHeader>
            <h3 className='text-truncate'>{item.title}</h3>

            <StyledProductListFavorCheck onClick={OnFavorite}>
              {isFavorite ? <HeartFilled /> : <HeartOutlined />}
            </StyledProductListFavorCheck>
          </StyledProductListSliderContentHeader>

          <StyledProductListContentPara>
            {item.description}
          </StyledProductListContentPara>

          <StyledProductListPrice>
            <StyledProductListPriceItem>
              <StyledProductListPriceItemText>
                <IntlMessages id='ecommerce.exclusivePrice' />:
              </StyledProductListPriceItemText>
              <StyledProductListPriceItemValue>
                ${+item.mrp - Math.round((+item.mrp * +item.discount) / 100)}
              </StyledProductListPriceItemValue>
            </StyledProductListPriceItem>
            <StyledProductListPriceItem>
              <IntlMessages id='ecommerce.mrp' />:
              <StyledProductListPriceItemValueCut>
                ${item.mrp}
              </StyledProductListPriceItemValueCut>
            </StyledProductListPriceItem>
            <StyledProductListPriceItem className='green'>
              {item.discount}% <IntlMessages id='ecommerce.off' />
            </StyledProductListPriceItem>
          </StyledProductListPrice>

          <StyledProductListAction>
            <StyledProductListActionItem className='add-to-com'>
              <Checkbox />
              <span>
                <IntlMessages id='ecommerce.addToCompare' />
              </span>
            </StyledProductListActionItem>
            <StyledProductListActionItem>
              <Rate value={item.rating} />
              <span>{`(${item.reviews})`}</span>
            </StyledProductListActionItem>
          </StyledProductListAction>
        </StyledProductListSliderContent>
      </StyledProductListCardContent>
    </StyledProductListCard>
  );
};

export default ListItem;

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

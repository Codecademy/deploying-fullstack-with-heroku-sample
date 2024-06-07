import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import {
  StyledAppMediaModal,
  StyledEmbedResponsive,
  StyledMedialCarousel,
  StyledMediaViewer,
} from './index.styled';

const settings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

const renderItem = (data, index) => {
  if (data.mime_type.startsWith('image')) {
    return (
      <img
        key={index}
        src={data.url}
        alt={data.name ? data.name : 'detail view'}
      />
    );
  } else if (data.mime_type.startsWith('docs')) {
    return (
      <StyledEmbedResponsive>
        <iframe
          key={index}
          src={data.url}
          title={data.name ? data.name : 'detail view'}
        />
      </StyledEmbedResponsive>
    );
  } else {
    return (
      <StyledEmbedResponsive>
        <iframe
          key={index}
          src={data.url}
          title={data.name ? data.name : 'detail view'}
        />
      </StyledEmbedResponsive>
    );
  }
};

const AppMediaViewer = ({ index, modalTitle, medias, onClose }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (index > -1) setOpen(true);
    else {
      setOpen(false);
    }
  }, [index]);

  return (
    <StyledAppMediaModal
      title={modalTitle}
      open={isOpen}
      footer={null}
      onCancel={onClose}
    >
      <StyledMediaViewer>
        {index >= 0 ? (
          <StyledMedialCarousel>
            <Slider
              settings={{ ...settings, initialSlide: index }}
              slickGoTo={index}
            >
              {medias.map((data, index) => renderItem(data, index))}
            </Slider>
          </StyledMedialCarousel>
        ) : null}
      </StyledMediaViewer>
    </StyledAppMediaModal>
  );
};

export default AppMediaViewer;

AppMediaViewer.propTypes = {
  index: PropTypes.number,
  modalTitle: PropTypes.string,
  medias: PropTypes.array,
  onClose: PropTypes.func,
};

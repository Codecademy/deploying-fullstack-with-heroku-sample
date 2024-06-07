import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import AppMedialViewer from '@crema/components/AppMedialViewer';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import {
  StyledPhotoAvatar,
  StyledPhotoCard,
  StyledPhotoLink,
  StyledPhotoRow,
} from './index.styled';

const Photos = ({ photos }) => {
  const [index, setIndex] = useState(-1);

  const onClose = () => {
    setIndex(-1);
  };

  const { messages } = useIntl();

  return (
    <StyledPhotoCard title={messages['wall.photos']}>
      <StyledPhotoRow>
        {photos.map((photo, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <StyledPhotoAvatar
              onClick={() => setIndex(index)}
              className='card-hover'
              key={index}
              src={photo.thumb}
              alt='user'
            />
          </Col>
        ))}
      </StyledPhotoRow>

      <StyledPhotoLink>View More</StyledPhotoLink>
      <AppMedialViewer
        index={index}
        medias={photos.map((data) => {
          return {
            url: data.thumb,
            mime_type: 'image/*',
          };
        })}
        onClose={onClose}
      />
    </StyledPhotoCard>
  );
};

export default Photos;

Photos.propTypes = {
  photos: PropTypes.array,
};

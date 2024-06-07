import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledInfoWidgetCard,
  StyledInfoWidgetContent,
  StyledInfoWidgetInfo,
  StyledInfoWidgetThumb,
} from './index.styled';

const InfoWidget = ({ data }) => {
  return (
    <StyledInfoWidgetCard heightFull className='card-hover'>
      <StyledInfoWidgetInfo>
        <StyledInfoWidgetThumb>
          <img src={data.icon} alt='icon' style={{ height: 60, width: 60 }} />
        </StyledInfoWidgetThumb>
        <StyledInfoWidgetContent>
          <h3 className='text-truncate'>{data.name}</h3>
          <p style={{ color: data.color }}>{data.measurement}</p>
        </StyledInfoWidgetContent>
      </StyledInfoWidgetInfo>
    </StyledInfoWidgetCard>
  );
};

export default InfoWidget;

InfoWidget.propTypes = {
  data: PropTypes.object,
};

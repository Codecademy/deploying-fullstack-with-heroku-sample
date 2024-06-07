import React, { useState } from 'react';
import MapChart from './MapChart';
import { Tooltip } from 'react-tooltip';
import { StyledMapView } from '../index.styled';

const MapView = () => {
  const [content, setContent] = useState('');
  return (
    <StyledMapView>
      <MapChart setTooltipContent={setContent} />
      <Tooltip>{content}</Tooltip>
    </StyledMapView>
  );
};

export default MapView;

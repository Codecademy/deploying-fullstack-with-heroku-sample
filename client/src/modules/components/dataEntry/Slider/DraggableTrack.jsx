import { Slider } from 'antd';

import React from 'react';

const DraggableTrack = () => {
  return (
    <Slider
      style={{ width: '100%' }}
      range={{ draggableTrack: true }}
      defaultValue={[20, 50]}
    />
  );
};

export default DraggableTrack;

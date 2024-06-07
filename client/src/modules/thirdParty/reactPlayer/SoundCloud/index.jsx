import React from 'react';
import ReactPlayer from 'react-player';

const SoundCloud = () => {
  return (
    <ReactPlayer
      controls={true}
      url='https://soundcloud.com/miami-nights-1984/accelerated'
    />
  );
};

export default SoundCloud;

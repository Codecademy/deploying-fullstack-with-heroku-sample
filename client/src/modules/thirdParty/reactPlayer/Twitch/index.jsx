import React from 'react';
import ReactPlayer from 'react-player';

const Twitch = () => {
  return (
    <ReactPlayer controls={true} url='https://www.twitch.tv/videos/106400740' />
  );
};

export default Twitch;

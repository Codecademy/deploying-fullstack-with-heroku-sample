import React from 'react';
import ReactPlayer from 'react-player';

const YouTube = () => {
  return (
    <ReactPlayer
      controls={true}
      url='https://www.youtube.com/watch?v=oUFJJNQGwhk'
    />
  );
};

export default YouTube;

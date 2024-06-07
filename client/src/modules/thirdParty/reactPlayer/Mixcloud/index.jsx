import React from 'react';
import ReactPlayer from 'react-player';

const Mixcloud = () => {
  return (
    <ReactPlayer
      controls={true}
      url='https://www.mixcloud.com/mixcloud/meet-the-curators/'
    />
  );
};

export default Mixcloud;

import React from 'react';
import { Col } from 'antd';

import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';

import Custom from './Custom';
import CustomSource from './Custom?raw';

import AppRowContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';

const Timeline = () => {
  return (
    <>
      <AppComponentHeader
        title='Timeline'
        description='A React component for playing a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, and DailyMotion.'
        refUrl='https://cookpete.com/react-player/'
      />

      <AppRowContainer>
        <Col span={24}>
          <AppComponentCard
            title='Custom'
            maxHeight={700}
            component={Custom}
            source={CustomSource}
          />
        </Col>

      </AppRowContainer>
    </>
  );
};

export default Timeline;

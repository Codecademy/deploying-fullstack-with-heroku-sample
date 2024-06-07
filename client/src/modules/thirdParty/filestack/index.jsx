import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Col } from 'antd';
import AppComponentCard from '@crema/components/AppComponentCard';
import InlinePicker from './Inline';
import InlinePickerSource from './Inline?raw';
import InlineSource from './Inline?raw';
import DNDPicker from './DNDPicker';

const FileStack = () => {
  return (
    <>
      <AppComponentHeader
        title='Filestack File Uploader & File Upload API'
        description='Simple file uploader & powerful APIs to upload, transform & deliver any file into your app.'
        refUrl='https://www.filestack.com/'
      />

      <AppRowContainer>
        <Col xs={24}>
          <AppComponentCard
            title='Inline Picker'
            component={InlinePicker}
            source={InlinePickerSource}
          />
        </Col>
        <Col xs={24}>
          <AppComponentCard
            title='Drop Pane Picker'
            component={DNDPicker}
            source={InlineSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default FileStack;

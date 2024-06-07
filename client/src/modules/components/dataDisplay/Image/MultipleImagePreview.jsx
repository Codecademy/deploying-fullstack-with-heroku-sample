import React from 'react';
import { Image } from 'antd';

const MultipleImagePreview = () => (
  <Image.PreviewGroup>
    <Image
      width={200}
      src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
    />
    <Image
      width={200}
      src='https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
    />
  </Image.PreviewGroup>
);
export default MultipleImagePreview;

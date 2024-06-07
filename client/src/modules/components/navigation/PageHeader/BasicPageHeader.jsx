import { PageHeader } from '@ant-design/pro-layout';

import React from 'react';

const BasicPageHeader = () => {
  return (
    <PageHeader
      className='site-page-header'
      onBack={() => null}
      title='Title'
      subTitle='This is a subtitle'
    />
  );
};

export default BasicPageHeader;

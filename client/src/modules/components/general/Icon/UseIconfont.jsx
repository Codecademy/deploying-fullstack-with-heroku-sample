import { createFromIconfontCN } from '@ant-design/icons';
import React from 'react';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const UseIconfont = () => {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <IconFont type='icon-tuichu' />
      <IconFont type='icon-facebook' />
      <IconFont type='icon-twitter' />
    </div>
  );
};

export default UseIconfont;

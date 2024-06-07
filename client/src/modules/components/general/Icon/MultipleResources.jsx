import { createFromIconfontCN } from '@ant-design/icons';
import React from 'react';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

const MultipleResources = () => {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <IconFont type='icon-javascript' />
      <IconFont type='icon-java' />
      <IconFont type='icon-shoppingcart' />
      <IconFont type='icon-python' />
    </div>
  );
};

export default MultipleResources;

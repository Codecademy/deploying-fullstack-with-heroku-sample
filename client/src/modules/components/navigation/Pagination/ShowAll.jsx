import { Pagination } from 'antd';

import React from 'react';

const ShowAll = () => {
  return (
    <Pagination
      total={85}
      showSizeChanger
      showQuickJumper
      showTotal={(total) => `Total ${total} items`}
    />
  );
};

export default ShowAll;

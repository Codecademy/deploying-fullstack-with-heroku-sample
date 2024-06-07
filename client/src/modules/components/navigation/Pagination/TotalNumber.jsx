import React from 'react';
import { Pagination, Space } from 'antd';

const TotalNumber = () => {
  return (
    <Space wrap>
      <Pagination
        total={85}
        showTotal={(total) => `Total ${total} items`}
        defaultPageSize={20}
        defaultCurrent={1}
      />
      <br />
      <Pagination
        total={85}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        defaultPageSize={20}
        defaultCurrent={1}
      />
    </Space>
  );
};

export default TotalNumber;

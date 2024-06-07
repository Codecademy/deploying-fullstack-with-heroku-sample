import React from 'react';
import { Badge, Space, Switch } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const StandAlone = () => {
  const [show, setShow] = React.useState(true);

  return (
    <Space>
      <Switch
        checked={show}
        onChange={() => {
          setShow(!show);
        }}
      />
      <Badge count={show ? 25 : 0} />
      <Badge
        count={show ? <ClockCircleOutlined style={{ color: '#f5222d' }} /> : 0}
      />
      <Badge count={show ? 4 : 0} className='site-badge-count-4' />
      <Badge
        className='site-badge-count-109'
        count={show ? 109 : 0}
        style={{ backgroundColor: '#52c41a' }}
      />
    </Space>
  );
};

export default StandAlone;

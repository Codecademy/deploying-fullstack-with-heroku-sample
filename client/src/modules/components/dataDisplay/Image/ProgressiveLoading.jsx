import React from 'react';
import { Button, Image, Space } from 'antd';
import PropTypes from 'prop-types';

function ProgressiveLoading() {
  const [random, setRandom] = React.useState();
  return (
    <Space size={12}>
      <Image
        width={200}
        src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
        placeholder={
          <Image
            preview={false}
            src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200'
            width={200}
          />
        }
      />
      <Button
        type='primary'
        onClick={() => {
          setRandom(Date.now());
        }}
      >
        Reload
      </Button>
    </Space>
  );
}

export default ProgressiveLoading;
ProgressiveLoading.propTypes = {
  random: PropTypes.string,
  setRandom: PropTypes.any,
};

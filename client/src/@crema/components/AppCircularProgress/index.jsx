import React from 'react';
import ProtoTypes from 'prop-types';

import { Progress } from 'antd';

const AppCircularProgress = ({ percent, ...rest }) => {
  return <Progress type='circle' percent={percent} {...rest} />;
};
export default AppCircularProgress;

AppCircularProgress.propTypes = {
  percent: ProtoTypes.number,
};

AppCircularProgress.defaultProps = {};

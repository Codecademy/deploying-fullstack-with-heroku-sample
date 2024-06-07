import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const AppSearch = () => {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  return (
    <Search
      placeholder='input search text'
      allowClear
      onSearch={onSearch}
      style={{ width: 200 }}
    />
  );
};

export default AppSearch;

AppSearch.prototype = {
  iconPosition: PropTypes.string,
  align: PropTypes.string,
  onlyIcon: PropTypes.bool,
};

AppSearch.defaultProps = {
  onlyIcon: false,
  overlap: true,
  iconPosition: 'left',
  align: 'left',
  iconStyle: {
    color: 'grey',
  },
};

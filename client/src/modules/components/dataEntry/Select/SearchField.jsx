import React from 'react';
import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
import { PropTypes } from 'prop-types';

const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then((response) => response.json())
      .then((d) => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach((r) => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

fetch.propTypes = {
  value: PropTypes.any,
  callback: PropTypes.any,
};

class SearchField extends React.Component {
  state = {
    data: [],
    value: undefined,
  };

  handleSearch = (value) => {
    if (value) {
      fetch(value, (data) => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    const options = this.state.data.map((d) => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <div style={{ width: '100%' }}>
        <Select
          showSearch
          value={this.state.value}
          placeholder={this.props.placeholder}
          style={{ width: '100%' }}
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          onSearch={this.handleSearch}
          onChange={this.handleChange}
          notFoundContent={null}
        >
          {options}
        </Select>
      </div>
    );
  }
}

SearchField.propTypes = {
  placeholder: PropTypes.any,
};
export default SearchField;

import React from 'react';
import { SketchPicker } from 'react-color';

class Basic extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
  };

  render() {
    const background = `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`;
    return (
      <div>
        <div onClick={this.handleClick.bind(this)}>
          <div
            style={{
              backgroundColor: background,
              width: 36,
              height: 14,
              borderRadius: 2,
            }}
          />
        </div>
        {this.state.displayColorPicker ? (
          <div>
            <div onClick={this.handleClose.bind(this)} />
            <SketchPicker
              color={this.state.color}
              onChange={this.handleChange.bind(this)}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Basic;

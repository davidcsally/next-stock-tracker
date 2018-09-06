import React, { Component } from 'react';
import './TextInput.scss';

class TextInput extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  handleSubmit = (e) => {
    const { onSubmit } = this.props;
    const { value } = this.state;
    e.preventDefault();
    onSubmit(value);
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <div styleName="container">
        <form onSubmit={this.handleSubmit}>
          <input
            value={value}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default TextInput;

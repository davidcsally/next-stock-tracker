import React, { Component } from 'react';
import './TextInput.scss';

/** Used in AddStockContainer */
class TextInput extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  // Wrapper for onSubmit() call
  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { value } = this.state;
    onSubmit(value);
    this.setState({ value: '' });
  }

  // Handle state 'value' field
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    const { value } = this.state;
    const { placeholder } = this.props;
    return (
      <div styleName="container">
        <form onSubmit={this.handleSubmit}>
          <input
            value={value}
            onChange={this.handleChange}
            placeholder={placeholder}
          />
        </form>
      </div>
    );
  }
}

export default TextInput;

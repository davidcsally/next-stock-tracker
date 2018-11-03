import React from 'react';
import './InputField.scss';

const styler = ({ error, valid, filled }) => {
  if (error) return 'error';
  if (valid) return 'valid';
  if (filled) return 'filled';
  return '';
}

const InputField = ({
  name,
  hoverColor,
  errorColor,
  successColor,
  valid = false,
  error = false,
  filled = false,
}) => {
  // const error = true;
  // const valid = false;
  return (
    <div styleName="group">
      <input type="text" required id={name} />
      <span styleName="highlight" />
      <span styleName={`bar ${styler({ error, valid, filled })}`} />
      <label htmlFor={name}>Name</label>
    </div>
  );
};

export default InputField;

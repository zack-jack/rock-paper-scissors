import React from 'react';
import { PropTypes } from 'prop-types';

const InputRadio = ({
  children, formValue, name, value, onValueChange,
}) => {
  const inputId = `${name}-${formValue.toLowerCase().replace(/ /g, '-')}`;
  const labelId = `${inputId}-label`;

  return (
    <div className="input-radio">
      <input
        id={inputId}
        checked={value === formValue}
        data-testid={inputId}
        name={name}
        value={formValue}
        type="radio"
        className="input-radio__field"
        onChange={(e) => onValueChange(e)}
      />
      <label
        data-testid={labelId}
        htmlFor={inputId}
        className="input-radio__label"
      >
        {children}
      </label>
    </div>
  );
};

InputRadio.propTypes = {
  children: PropTypes.node.isRequired,
  formValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default InputRadio;

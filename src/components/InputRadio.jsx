import React from 'react';
import { PropTypes } from 'prop-types';

const InputRadio = ({
  children, formValue, name, value, onValueChange,
}) => {
  const id = `${name}-${formValue.toLowerCase().replace(/ /g, '-')}`;

  return (
    <div className="input-radio">
      <input
        id={id}
        checked={value === formValue}
        name={name}
        value={formValue}
        type="radio"
        className="input-radio__field"
        onChange={(e) => onValueChange(e)}
      />
      <label
        htmlFor={id}
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

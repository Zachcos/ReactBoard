import React from 'react';

const TextInput = ({name, label, value, onChange}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type='text'
          name={name}
          className="form-control"
          value={value}
          onChange={onChange} />
      </div>
    </div>
  )
}

TextInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string
}

export default TextInput;

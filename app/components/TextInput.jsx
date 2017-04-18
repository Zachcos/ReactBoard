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

export default TextInput;

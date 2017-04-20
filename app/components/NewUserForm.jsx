import React from 'react';
import TextInput from 'TextInput';
import PropTypes from 'prop-types';

const NewUserForm = ({user, onSave, onChange}) =>
  <div>
    <form>
      <TextInput
        name="displayName"
        label="Display Name"
        type="text"
        value={user.displayName}
        onChange={onChange} />
      <TextInput
        name="username"
        label="Username"
        type="text"
        value={user.username}
        onChange={onChange} />
      <TextInput
        name="email"
        label="Email"
        type="email"
        value={user.email}
        onChange={onChange} />
      <TextInput
        name="password"
        label="Password"
        type="password"
        value={user.password}
        onChange={onChange} />
      <input
        type="submit"
        className="btn btn-success"
        onClick={onSave}/>
    </form>
  </div>

NewUserForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default NewUserForm;

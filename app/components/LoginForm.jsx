import React from 'react';
import TextInput from 'TextInput';

export const LoginForm = ({user, onSave, onChange}) =>
  <div>
    <form>
      <TextInput
        name="email"
        label="Email"
        type="text"
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

export default LoginForm;

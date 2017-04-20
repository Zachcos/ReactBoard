import React from 'react';
import TextInput from 'TextInput';
import PropTypes from 'prop-types';

const MessageForm = ({message, onSave, onChange}) =>
  <div>
    <form>
      <TextInput
        name="subject"
        label="Subject"
        type="text"
        value={message.subject}
        onChange={onChange} />
      <TextInput
        name="body"
        label="Body"
        type="text"
        value={message.body}
        onChange={onChange} />
      <input
        type="submit"
        className="btn btn-success"
        onClick={onSave} />
    </form>
  </div>

MessageForm.propTypes = {
  message: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}
export default MessageForm;

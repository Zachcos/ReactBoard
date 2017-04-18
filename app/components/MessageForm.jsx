import React from 'react';
import TextInput from 'TextInput';

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


export default MessageForm;

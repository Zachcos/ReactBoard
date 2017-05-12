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
      <label htmlFor="category">Category:</label>
      <select
        name="category"
        selected="cat1"
        type="select"
        value={message.category}
        onChange={onChange}
        style={{display: 'block'}}>
        <option value="cat1">Category 1</option>
        <option value="cat2">Category 2</option>
        <option value="cat3">Category 3</option>
      </select>
      <br />
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

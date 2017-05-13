import React from 'react';
import TextInput from 'TextInput';
import PropTypes from 'prop-types';

const CommentForm = ({comment, onSave, onChange}) =>
  <div>
    <form>
      <TextInput
        name="body"
        label="Comment"
        type="text"
        value={comment.body}
        onChange={onChange} />
      <input
        type="submit"
        className="btn btn-success"
        onClick={onSave} />
      </form>
    </div>

CommentForm.propTypes = {
  comment: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CommentForm;

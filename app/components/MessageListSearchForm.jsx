import React from 'react';
import TextInput from 'TextInput';
import PropTypes from 'prop-types';

const MessageListSearchForm = ({searchText, onChange}) =>
  <div>
    <TextInput
      type="text"
      label="Search messages"
      name="searchText"
      value={searchText}
      onChange={onChange} />
  </div>

MessageListSearchForm.propTypes = {
  searchText: PropTypes.string,
  onChange: PropTypes.func.isRequired
}


export default MessageListSearchForm;

import React from 'react';
import TextInput from 'TextInput';

const MessageListSearchForm = ({searchText, onChange}) =>
  <div>
    <TextInput
      type="text"
      label="Search messages"
      name="searchText"
      value={searchText}
      onChange={onChange} />
  </div>


export default MessageListSearchForm;

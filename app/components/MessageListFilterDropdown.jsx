import React from 'react';
import PropTypes from 'prop-types';

const MessageListFilterDropdown = ({currentCategory, onChange}) =>
  <div>
    <label htmlFor="category">Filter messages by Category</label>
    <select
      name="category"
      selected="ALL"
      type="select"
      value={currentCategory}
      onChange={onChange}
      style={{display: 'block'}}>
      <option value="ALL">All</option>
      <option value="cat1">Category 1</option>
      <option value="cat2">Category 2</option>
      <option value="cat3">Category 3</option>
    </select>
    <br />
  </div>

MessageListFilterDropdown.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default MessageListFilterDropdown;

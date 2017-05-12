import React from 'react';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';
import PropTypes from 'prop-types';

import MessageList from 'MessageList';
import MessageListSearchForm from 'MessageListSearchForm';

class MessageBoardApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      currentCategory: 'ALL'
    };

    this.updateSearchText = this.updateSearchText.bind(this);
    this.updateCatFilter = this.updateCatFilter.bind(this);
  }

  updateSearchText(event) {
    const currentSearch = event.target.value;
    this.setState({ searchText: currentSearch })
  }

  updateCatFilter(event) {
    const currentCat = event.target.value;
    this.setState({ currentCategory: currentCat })
  }

  render() {
    return (
      <div className="col-sm-12">
        <h1>Messages &nbsp;
          <Link to="messages/new" className="btn btn-primary">+ message</Link>
        </h1>
        <div className="col-sm-4">
          <label htmlFor="category">Filter messages by Category</label>
          <select
            name="category"
            selected="ALL"
            type="select"
            value={this.state.currentCategory}
            onChange={this.updateCatFilter}
            style={{display: 'block'}}>
            <option value="ALL">All</option>
            <option value="cat1">Category 1</option>
            <option value="cat2">Category 2</option>
            <option value="cat3">Category 3</option>
          </select>
          <br />
          <MessageListSearchForm searchText={this.state.searchText} onChange={this.updateSearchText} />
          <MessageList
            messages={this.props.messages}
            searchText={this.state.searchText}
            currentCategory={this.state.currentCategory} />
        </div>
        <div className="col-sm-8">
          {this.props.children}
        </div>
      </div>
    )
  };
};

MessageBoardApp.propTypes = {
  messages: PropTypes.array.isRequired,
  children: PropTypes.element
}

export default connect((state) => state)(MessageBoardApp);

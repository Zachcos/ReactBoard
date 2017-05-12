import React from 'react';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';
import PropTypes from 'prop-types';

import MessageList from 'MessageList';
import MessageListSearchForm from 'MessageListSearchForm';
import MessageListFilterDropdown from 'MessageListFilterDropdown';

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
        <h1 style={{marginBottom: 30}}>Messages &nbsp;
          <Link to="messages/new" className="btn btn-primary">+ message</Link>
        </h1>
        <div className="col-sm-3">
          <MessageList
            messages={this.props.messages}
            searchText={this.state.searchText}
            currentCategory={this.state.currentCategory} />
        </div>
        <div className="col-sm-6">
          {this.props.children}
        </div>
        <div className="col-sm-3">
          <div className="panel panel-default">
            <div className="panel-heading"><h4>Filter and Search</h4></div>
            <div className="panel-body">
              <MessageListFilterDropdown currentCategory={this.state.currentCategory} onChange={this.updateCatFilter} />
              <MessageListSearchForm searchText={this.state.searchText} onChange={this.updateSearchText} />
            </div>
          </div>
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

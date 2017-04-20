import React from 'react';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';
import PropTypes from 'prop-types';

import MessageList from 'MessageList';

class MessageBoardApp extends React.Component {
  render() {
    return (
      <div className="col-sm-12">
        <h1>Messages &nbsp;
          <Link to="messages/new" className="btn btn-primary">+ message</Link>
        </h1>
        <div className="col-sm-4">
          <MessageList messages={this.props.messages} />
        </div>
        <div className="col-sm-8">
          {this.props.children}
        </div>
      </div>
    )
  };
};

MessageBoardApp.propTypes = {
  messages: PropTypes.object.isRequired
}

export default connect((state) => state)(MessageBoardApp);

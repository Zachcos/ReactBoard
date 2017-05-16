import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';

export class Comment extends React.Component {
  render() {
    const {body, userId, created, users} = this.props;
    const timestamp = moment.unix(created).fromNow();
    const renderAuthor = () => {
      let author = '';
      if (users.length > 0) {
        author = {...users.find(user => user.uid === userId)}
      }
      return <div className="text-right">Post by: {author.displayName}</div>
    }

    return (
      <div className="panel panel-info" style={{marginTop: 20, marginLeft: 35}}>
        <div className="panel-heading">
          {renderAuthor()}
        </div>
        <div className="panel-body">
          {body}
        </div>
        <div className="panel-footer" style={{backgroundColor: "#d9edf7", color: '#31708f'}}>
          <div className="text-right">{timestamp}</div>
        </div>
      </div>
    )
  }
}

export default connect((state) => state)(Comment);

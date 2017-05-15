import React from 'react';
import {connect} from 'react-redux';

export class Comment extends React.Component {
  render() {
    const {body, userId, users} = this.props;
    const renderAuthor = () => {
      let author = '';
      if (users.length > 0) {
        author = {...users.find(user => user.uid === userId)}
      }
      return <i>Post created by: {author.displayName}</i>
    }

    return (
      <div>
        <p>{body}</p>
        <p>{userId}</p>
        {renderAuthor()}
      </div>
    )
  }
}

export default connect((state) => state)(Comment);

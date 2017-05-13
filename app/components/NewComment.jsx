import React from 'react';

class NewComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: {
        body: 'this is a test comment',
        parentId: this.props.parentId,
        commentNum: this.props.commentNum + 1
      }
    }
  }
  render() {
    return(
      <div>
        <p>I am the new comment component</p>
        <p>{this.state.comment.commentNum}</p>
      </div>
    )
  }
};

export default NewComment;

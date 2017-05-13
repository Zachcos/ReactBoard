import React from 'react';
import firebase from 'app/firebase';
import CommentForm from 'CommentForm';

class NewComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: {
        body: 'this is a test',
        parentId: this.props.parentId,
        commentNum: this.props.commentNum + 1,
        userId: firebase.auth().currentUser.uid
      }
    }

    this.updateCommentState = this.updateCommentState.bind(this);
    this.saveComment = this.saveComment.bind(this);
  }

  updateCommentState(event) {
    const field = event.target.name;
    const comment = this.state.comment;
    comment[field] = event.target.value;
    return this.setState({comment})
  }

  saveComment(event) {
    event.preventDefault();
    alert(this.state.comment);
    // this.props.actions.startCreateMessage(this.state.message);
  }

  render() {
    console.log('current state:', this.state.comment)
    return(
      <div>
        <CommentForm
          comment={this.state.comment}
          onSave={this.saveComment}
          onChange={this.updateCommentState} />
      </div>
    )
  }
};

export default NewComment;

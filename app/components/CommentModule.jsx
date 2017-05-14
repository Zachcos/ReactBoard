import React from 'react';
import firebase from 'app/firebase';

import CommentForm from 'CommentForm';

export class CommentModule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCommenting: false,
      comment: {
        body: '',
        parentId: '',
        commentNum: undefined,
        userId: ''
      }
    }

    this.toggleComment = this.toggleComment.bind(this);
    this.updateCommentState = this.updateCommentState.bind(this);
    this.saveComment = this.saveComment.bind(this);
  }

  toggleComment() {
    this.setState({isCommenting: !this.state.isCommenting});
  }

  updateCommentState(event) {
    const field = event.target.name;
    const comment = this.state.comment;
    comment[field] = event.target.value;
    comment.parentId = this.props.parentId;
    comment.commentNum = this.props.commentNum + 1;
    comment.userId = firebase.auth().currentUser.uid;
    return this.setState({comment})
  }

  saveComment(event) {
    event.preventDefault();
    this.setState({isCommenting: !this.state.isCommenting});
    console.log('Saving this comment:', this.state.comment);
    // this.props.actions.startCreateMessage(this.state.message);
  }

  render() {
    if (this.state.isCommenting) {
      return (
        <CommentForm
          comment={this.state.comment}
          onSave={this.saveComment}
          onChange={this.updateCommentState} />
      )
    }

    return (
      <button className="btn btn-success" onClick={this.toggleComment}>Post comment</button>
    )
  }
}


export default CommentModule;

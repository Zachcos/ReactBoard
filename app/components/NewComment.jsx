import React from 'react';
import firebase from 'app/firebase';
import {connect} from 'react-redux';
import * as actions from 'actions';
import moment from 'moment';

import CommentForm from 'CommentForm';

export class NewComment extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comment: {
        body: '',
        parentId: '',
        created: undefined,
        userId: ''
      }
    };

    this.updateCommentState = this.updateCommentState.bind(this);
    this.saveComment = this.saveComment.bind(this);
  }

  updateCommentState(event) {
    const field = event.target.name;
    const comment = this.state.comment;
    comment[field] = event.target.value;
    comment.parentId = this.props.parentId;
    comment.created = moment().unix();
    comment.userId = firebase.auth().currentUser.uid;
    return this.setState({comment})
  }

  saveComment(event) {
    const {dispatch} = this.props;
    event.preventDefault();
    this.props.setCommentingState();
    dispatch(actions.startCreateComment(this.state.comment));
  }

  render() {
    const {parentId} = this.props;
    const isChildComment = (parentId) => (comment) => {
      if (parentId === comment.parentId) {
        return comment
      }
    }

    const renderComments = () => {
      const {comments, parentId} = this.props;
      return comments.filter(isChildComment(parentId)).map(comment => {
        return <p>{comment.body}</p>
      })
    }

    return (
      <CommentForm
        comment={this.state.comment}
        onSave={this.saveComment}
        onChange={this.updateCommentState} />
    )

    return (
      <div>
        {renderComments()}
      </div>
    )
  }
}

export default connect((state) => state)(NewComment);

import React from 'react';
import firebase from 'app/firebase';
import {connect} from 'react-redux';
import * as actions from 'actions';
import moment from 'moment';

import NewComment from 'NewComment';
import CommentList from 'CommentList';

class CommentModule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isCommenting: false}

    this.setCommentingState = this.setCommentingState.bind(this);
  }

  setCommentingState() {
    this.setState({isCommenting: !this.state.isCommenting});
  }

  render() {
    if (this.state.isCommenting) {
      return <NewComment parentId={this.props.parentId} setCommentingState={this.setCommentingState} />
    }

    return (
      <div>
        <CommentList comments={this.props.comments} parentId={this.props.parentId} />
        <button className="btn btn-success" onClick={this.setCommentingState}>Post comment</button>
      </div>
    )
  }
}


export default connect((state) => state)(CommentModule);

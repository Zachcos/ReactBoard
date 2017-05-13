import React from 'react';

import NewComment from 'NewComment';

export class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isCommenting: false}

    this.toggleComment = this.toggleComment.bind(this);
  }

  toggleComment() {
    this.setState({isCommenting: !this.state.isCommenting});
  }

  render() {
    if (this.state.isCommenting) {
      return <NewComment parentId={this.props.parentId} commentNum={this.props.commentNum} />
    }

    return (
      <button className="btn btn-success" onClick={this.toggleComment}>Post comment</button>
    )
  }
}


export default Comments;

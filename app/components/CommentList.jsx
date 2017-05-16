import React from 'react';
import Comment from 'Comment';

const CommentList = ({comments, parentId}) => {
  const isMessageComment = (parentId) => (comment) => {
    if (comment.parentId === parentId) {
      return comment
    }
  }

  const renderList = () => {
    if (comments.length > 0) {
      return comments.filter(isMessageComment(parentId)).map(comment => {
        return <Comment key={comment.id} {...comment} />
      })
    } else {
      return (
        <div className="panel panel-default">
          <div className="panel-body">
            No comments to display
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      {renderList()}
    </div>
  )
};


export default CommentList;

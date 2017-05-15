import React from 'react';

const CommentList = ({comments, parentId}) => {
  const isMessageComment = (parentId) => (comment) => {
    if (comment.parentId === parentId) {
      return comment
    }
  }

  const renderList = () => {
    if (comments.length > 0) {
      return comments.filter(isMessageComment(parentId)).map(comment => {
        return <p key={comment.id}>{comment.body}</p>
      })
    } else {
      return <p>No comments to display</p>
    }
  }

  return (
    <div>
      {renderList()}
    </div>
  )
};


export default CommentList;

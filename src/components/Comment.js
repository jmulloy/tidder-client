import React from 'react';

const Comment = ({ comment }) => {
    return(
        <div className="comment-block">
            <h3>{comment.author}</h3>
            <p>{comment.content}</p>
          <hr/>
        </div>
    )
}

export default Comment;
import React from 'react';

const PostDebut = (props) => {
    return (
        <div className="block" key={post.id} >
        <h4>{props.post.title}</h4>
        <p>{props.post.author}</p>
      </div>
    )
}

export default PostDebut
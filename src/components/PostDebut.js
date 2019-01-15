import React from 'react';

const PostDebut = (props) => {
    return (
        <div className="block" key={post.id} >
        <h4><Link to='/posts/${props.post.id}'>{props.post.title}</Link></h4>
        <p>{props.post.author}</p>
      </div>
    )
}

export default PostDebut
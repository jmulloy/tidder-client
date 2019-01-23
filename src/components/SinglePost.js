import React from 'react'

const SinglePost = (props) => {
    
    return (
        <div className="post-block">
            <h2>{props.post.title}</h2>
            <h3>{props.post.author}</h3>
            <p>{props.post.content}</p> 
        </div>
    )
}

export default SinglePost
import React from 'react'

const SinglePost = (props) => {
    return (
        <div>
            <h3>{props.post.title}</h3>
            <h2>{props.post.author}</h2>
            <p>{props.post.content}</p>
        </div>
    )
}

export default SinglePost
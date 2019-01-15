import React from 'react'
import { Link } from 'react-router-dom'

const PostDebut = (props) => {
    return (
        <div className='block'>
            <h3><Link to={`/posts/${props.post.id}`}>{props.post.title}</Link></h3>
            <p>{props.post.author}</p>
        </div>
    )
}

export default PostDebut
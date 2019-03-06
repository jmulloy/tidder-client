import React, {Component} from 'react'

class SinglePost extends Component {
render() {
    return (
        <div className="post-block">
            <h2>{this.props.post.title}</h2>
            <h3>{this.props.post.author}</h3>
            <p>{this.props.post.content}</p> 
            <div className="postlikes">
                <p>this post has {this.props.post.likes} likes</p>
            </div>
        </div>
    )
}
}
export default SinglePost

// const SinglePost = (props) => {
    
//     return (
//         <div className="post-block">
//             <h2>{props.post.title}</h2>
//             <h3>{props.post.author}</h3>
//             <p>{props.post.content}</p> 
//         </div>
//     )
// }

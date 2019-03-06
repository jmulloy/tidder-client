import React, {Component} from 'react'
import { updateLikes } from '../actions/postsActions'
import { connect } from 'react-redux'

class SinglePost extends Component {

    state = {
        likes: this.props.post.likes
    }

    handleClick = (event) => {
        event.preventDefault();
        let newLikes = this.state.likes + 1
        this.setState({likes: newLikes})
    }
render() {
    return (
        <div className="post-block">
            <h2>{this.props.post.title}</h2>
            <h3>{this.props.post.author}</h3>
            <p>{this.props.post.content}</p> 
            <div className="postlikes">
                <p>This post has {this.state.likes} likes</p>
                <button className="btn btn-primary" onClick={this.handleClick}> Like this post!</button>
            </div>
        </div>
    )
}
}

const mapDispatchToProps = dispatch => {
    return {
        updateLikes: (id, likes) => {
            dispatch(updateLikes(id, likes))
        }
    }
}
export default connect(null, mapDispatchToProps)(SinglePost)

// const SinglePost = (props) => {
    
//     return (
//         <div className="post-block">
//             <h2>{props.post.title}</h2>
//             <h3>{props.post.author}</h3>
//             <p>{props.post.content}</p> 
//         </div>
//     )
// }

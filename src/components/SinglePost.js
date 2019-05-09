import React, {Component} from 'react'
import { updateLikes } from '../actions/postsActions'
import { connect } from 'react-redux'

class SinglePost extends Component {

    state = {
        likes: this.props.post.likes
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.post.likes !== this.props.post.likes) {
            this.setState({likes: nextProps.post.likes})
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        let newLikes = this.props.post.likes + 1
        this.setState({likes: newLikes}, () => this.props.updateLikes(this.props.post.id, this.state.likes))
    }

    editClick = (event) => {
        event.preventDefault();
    }
render() {
    return (
        <div className="post-block">
            <h2>{this.props.post.title}</h2>
            <h3>{this.props.post.author}</h3>
            <p>{this.props.post.content}</p> 
            <div className="postlikes">
                <p>This post has {this.state.likes} likes</p>
                <button className="btn btn" onClick={this.handleClick}> Like this post!</button>
                <button className="btn btn-primary" onClick={this.editClick}>Edit</button>
                <button className="btn btn-danger">Delete</button>
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



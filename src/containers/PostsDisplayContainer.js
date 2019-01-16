import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSinglePost } from '../actions/postsActions.js'
import SinglePost from '../components/SinglePost.js'
import CommentDisplayContainer from './CommentsDisplayContainer'
import CommentForm from '../components/CommentForm'
class PostsDisplayContainer extends Component {

    componentDidMount() {
        this.props.fetchSinglePost(this.props.match.params.postId)
    }

    render() {
        return (
            <div>
            {this.props.post ? <SinglePost post={this.props.post} /> : null}
            {this.props.post ? <CommentDisplayContainer post={this.props.post} /> : null}
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchSinglePost: (postId) => dispatch(fetchSinglePost(postId))
    }
  }
  
  function mapStateToProps(state){
    return {post: state.posts.post}
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(PostsDisplayContainer)
  
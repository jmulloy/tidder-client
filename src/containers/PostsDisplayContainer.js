import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSinglePost } from '../actions/postsActions.js'

class PostsDisplayContainer extends Component {

    componentDidMount() {
        this.props.fetchSinglePost(this.props.match.params.postId)
    }

    render() {
        return (
            <div>
                This is a single Post
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
    return {posts: state.posts.posts}
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(PostsDisplayContainer)
  
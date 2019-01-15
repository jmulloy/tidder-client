import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postsActions.js'
import  PostDebut  from '../components/PostDebut'

class PostsPreviewContainer extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }
  displayPostsDebut = () => {
    return this.props.posts.map(post => <PostDebut key={post.id} post={post} />) 
  }

  render() {
    
    return (
      <div>
        <h2> Posts </h2>
        {this.displayPostsDebut()}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

function mapStateToProps(state){
  return {posts: state.posts.posts}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPreviewContainer)

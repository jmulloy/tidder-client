import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postsActions.js'

class PostsPreviewContainer extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    
    return (
      <div>
        {this.props.posts && this.props.posts.map((post) => {
          return(
            <div className="block" key={post.id} >
              <h4>{post.title}</h4>
              <p>{post.author}</p>
            </div>
          )       
        })}
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

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postsActions.js'

class PostsPreviewContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3005/api/posts')
      .then(response => response.json())
      
      .then(data =>{
        this.setState({posts: data})
      }); 
  }
  render() {
    return (
      <div>
        {this.state.posts.map((post) => {
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
    posts: () => dispatch(fetchPosts())
  }
}

function mapStateToProps(state){
  return {posts: state.posts.posts}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPreviewContainer)

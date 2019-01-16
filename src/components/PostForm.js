import React from 'react'
import { connect } from 'react-redux'
// import { addPost } from '../actions/postsActions'
import { createPost } from '../actions/postsActions'
class PostForm extends React.Component {
    constructor() {
      super();
      this.state = {
          title: '',
          author: '',
          content: ''
        };
  
      
    }
  
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
  
    handleOnSubmit = event => {
        event.preventDefault()
        this.props.createPost(this.state)
      }
  
    render() {      
        return (
            <div className="post-form">
                <h2>Add A Thought or Idea</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="title">Title:</label><br/>
                    <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    /><br/>
                    <label htmlFor="author">Author:</label><br/>
                    <input
                    type="text"
                    name="author"
                    onChange={this.handleChange}
                    value={this.state.author}
                    /><br/>
                    <label htmlFor="content">Content:</label><br/>
                    <textarea
                    type="text"
                    name="content"
                    onChange={this.handleChange}
                    value={this.state.content}
                    ></textarea><br/>
                    <input type="submit" value='Submit'/>
                </form>
            </div>
        )
    }
  }

//   const mapStateToProps = state => {
//     return {
//         postFormData: state.postFormData
//     }
// }

  export default connect (null, { createPost })(PostForm)

import React from 'react'
import { connect } from 'react-redux'
import { updatePostFormData } from '../actions/postForm'

class PostForm extends React.Component {
    constructor() {
      super();
      this.state = {
          title: '',
          author: '',
          content: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const {title, author, content} = event.target;
      const currentPostFormData = Object.assign({}, this.props.PostFormData, {
          [title]: title,
          [author]: author,
          [content]: content
      })
      this.props.updatePostFormData(currentPostFormData)
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.addPost(this.state)
      this.setState({
          title: '',
          author: '',
          content: ''
      })
    }
  
    render() {      
        return (
            <div className="post-form">
                <h2>Add A Thought or Idea</h2>
                <form>
                    <label htmlFor="title">Title:</label><br/>
                    <input
                    type="text"
                    name="title"
                    onChange={this.handlechange}
                    title={this.state.title}
                    /><br/>
                    <label htmlFor="author">Author:</label><br/>
                    <input
                    type="text"
                    name="author"
                    onChange={this.handlechange}
                    author={this.state.author}
                    /><br/>
                    <label htmlFor="content">Content:</label><br/>
                    <textarea
                    type="text"
                    name="conent"
                    onChange={this.handlechange}
                    content={this.state.content}
                    /><br/>
                    <input type="submit" value='Submit'/>
                </form>
            </div>
        )
    }
  }

  const mapStateToProps = state => {
    return {
        postFormData: state.postFormData
    }
}

  export default connect (mapStateToProps, { updatePostFormData, addPost })(PostForm)

import React from 'react';


class PostForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          title: '',
          author: '',
          content: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
          title: event.target.title,
          author: event.traget.author,
          content: event.target.content
        });
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
          <div className='post-form'>
          <h2>Create a Post</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Title: </label><br/>
            <input type="text" title={this.state.title} onChange={this.handleChange} />
          <br/>
          <label> Author: </label><br/>
            <input type="text" author={this.state.author} onChange={this.handleChange} />
          <br/>
          <label>Content: </label> <br/>
            <textarea type="text" content={this.state.content} onChange={this.handleChange} /> <br/>
          
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }

  export default PostForm
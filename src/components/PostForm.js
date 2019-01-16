import React from 'react';


class PostForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          title: '',
          content: '',
          author: ''
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
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" title={this.state.title} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Author:
            <input type="text" author={this.state.author} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Content:
            <textarea type="text" content={this.state.content} onChange={this.handleChange} />
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }

  export default PostForm
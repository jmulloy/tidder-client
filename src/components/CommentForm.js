import React from 'react'
import { connect } from 'react-redux'
import { createComment } from '../actions/commentsActions'
class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            content: ''
        }
    }

    

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const commentData = Object.assign({}, this.state, {
            post_id: this.props.post.id
        })
        this.props.createComment(commentData)
    }
    //need post id from parent component and pass it in somewhere on line 20 

    render() {
        return (
            <div>
            <form onSubmit={this.handleOnSubmit.bind(this)}>
                <label htmlFor="author">Author:</label>

                <input 
                required
                type="text"
                name="author"
                value={this.state.author}
                onChange={this.handleChange}
                /><br/>
                <label htmlFor="content">Content:</label>
                <textarea
                required
                 type="text"
                 name="content"
                 value={this.state.content}
                 onChange={this.handleChange}>    
                </textarea><br/>
                <input type="submit" value='Submit'/>

            </form>
            </div>
        )
    }
}

export default connect (null, { createComment })(CommentForm)

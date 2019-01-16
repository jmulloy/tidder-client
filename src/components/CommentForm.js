import React from 'react'

class CommentForm extends React.Component {
    constructor() {
        super();
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
        this.props.createComment(this.state)
    }
    //need post id from parent component and pass it in

    render() {
        return (
            <div>
            <form>
                <label htmlFor="author">Author:</label>

                <input 
                type="text"
                name="author"
                value={this.state.author}
                onChange={this.handleChange}
                /><br/>
                <label htmlFor="content">Content:</label>
                <textarea
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

export default CommentForm
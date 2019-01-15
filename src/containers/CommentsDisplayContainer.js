import React from 'react';
import Comment from '../components/Comment.js';
import { fetchComments } from '../actions/commentsActions.js'
import { connect } from 'react-redux'

class CommentsDisplayContainer extends Component {

    componentDidMount() {
      this.props.fetchComments()
    }
    displayComments = () => {
      return this.props.comments.filter(comment => comment.post_id === this.props.SinglePost.id).map() 
    }
  
    render() {
      
      return (
        <div className="comments-container">
          <h2> Comments </h2>
          {this.displaycomments()}
        </div>
      );
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchComments: () => dispatch(fetchComments())
    }
  }
  
  function mapStateToProps(state){
    return {comments: state.comments.comments}
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CommentsDisplayContainer)
  
import React, {Component} from 'react';
import Comment from '../components/Comment.js';
import { fetchComments } from '../actions/commentsActions.js'
import { connect } from 'react-redux'

class CommentsDisplayContainer extends Component {

    componentDidMount() {
      this.props.fetchComments()
    }
    commentsDisplay = () => {
      return  this.props.comments.filter(comment => comment.post_id === this.props.post.id).map(comment => <Comment key={comment.id} comment={comment}/>)
    }
  
    render() {
      console.log(this.props.comments)
      return (
        <div className="comments-container">
          <h2> Comments </h2>
          {this.commentsDisplay()}
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
  
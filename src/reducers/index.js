import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';
import PostFormData from './PostFormData';

 const rootReducer =  combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  post: PostFormData
});


 export default rootReducer;
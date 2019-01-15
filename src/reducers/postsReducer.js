export default function postsReducer (
    state={
        loading: false, 
        posts: []}, 
        action) {
            console.log(action)
    switch ( action.type ) {
        case 'LOADING_POSTS':
         return Object.assign({}, state, {loading: true})
        case 'FETCH_POSTS':
         return {loading: false, posts: action.payload}
      default:
        return state;
    }
  
   }
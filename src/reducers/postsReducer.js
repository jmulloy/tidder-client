
export default function postsReducer (
    state={
        loading: false, 
        posts: []}, 
        action) {
    switch ( action.type ) {
        case 'LOADING_POSTS':
         return Object.assign({}, state, {loading: true})
         case 'FETCH_POSTS':
         
         return {...state, loading: false, posts: action.posts}
        case 'ADD_SINGLE_POST':
        return {...state, loading: false, post: action.post} 
         
          default:
        return state;
    }
  
   }
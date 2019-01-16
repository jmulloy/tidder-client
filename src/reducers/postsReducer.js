
export default function postsReducer (
    state={
        loading: false, 
        posts: [],
        post: null}, 
        action) {
            
    switch ( action.type ) {
        case 'LOADING_POSTS':
         return Object.assign({}, state, {loading: true})
         case 'FETCH_POSTS':
         
         return {...state, loading: false, posts: action.posts}
         case 'ADD_SINGLE_POST':
         return {...state, loading:false, post: action.post}
        case 'ADD_POST':
        return {...state, posts: [...state.posts, action.post] } 
         
          default:
        return state;
    }
  
   }
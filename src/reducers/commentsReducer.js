export default function commentsReducer (
    state={
        loading: false, 
        comments: []}, 
        action) {
    switch ( action.type ) {
        case 'START_ADDING_COMMENTS':
            return {...state, loading:true}
        case 'ADD_COMMENTS':
        return {loading:false, comments: action.comments}
        case 'ADD_COMMENT':
        return {...state, comments: [...state.comments, action.comment] } 
      default:
        return state;
    }
  
}
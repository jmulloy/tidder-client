export function fetchComments() {
    return (dispatch) => {
        dispatch({type: 'START_ADDING_COMMENTS_REQUEST'})
        return fetch('http://localhost:3005/api/comments')
        .then(response => response.json())
        .then(comments => dispatch({type: 'ADD_COMMENTS', comments}))
    }
}
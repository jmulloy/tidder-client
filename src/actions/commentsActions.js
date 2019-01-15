export function fetchComments() {
    return (dispatch) => {
        dispatch({type: 'START_ADDING_POSTS_REQUEST'})
        return fetch('http://localhost:3005/api/posts')
        .then(response => response.json())
        .then(posts => dispatch({type: 'ADD_COMMENTS', posts}))
    }
}
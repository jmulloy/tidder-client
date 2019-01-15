export function fetchPosts() {
    return (dispatch) => {
        dispatch({type: 'START_ADDING_POSTS_REQUEST'})
        return fetch('http://localhost:3005/api/posts')
        .then(response => response.json())
        .then(posts => dispatch({type: 'FETCH_POSTS', posts}))
    }
}
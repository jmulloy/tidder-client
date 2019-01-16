export function fetchPosts() {
    return (dispatch) => {
        dispatch({type: 'START_ADDING_POSTS_REQUEST'})
        return fetch('http://localhost:3005/api/posts')
        .then(response => response.json())
        .then(posts => dispatch({type: 'FETCH_POSTS', posts}))
    }
}

export const addPost = post => {
    return {
        type: 'CREATE_POST_SUCCESS',
        post
    }
}

export function fetchSinglePost(postId) {
    return(dispatch) => {
        dispatch({type: 'START_ADDING_POSTS_REQUEST'})
        return fetch(`http://localhost:3005/api/posts/${postId}`)
        .then(response => response.json())
        .then(post => dispatch({type: 'ADD_SINGLE_POST', post}))
    }
}

export function createPost(post) {
    return dispatch => {
        return fetch('http://localhost:3005/api/posts', {
            method: "POST",
            headers: {
                'Conent-Type': 'application/json' 
            },
            body: JSON.stringify({post:post})
        })
        .then(response => response.json())
        .then(post => dispatch(addPost(post)))
    }
}

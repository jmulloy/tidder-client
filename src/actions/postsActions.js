const BASEURL = "http://localhost:3005"


export function fetchPosts() {
    return (dispatch) => {
        dispatch({type: 'START_ADDING_POSTS_REQUEST'})
        return fetch(`${BASEURL}/api/posts`)
        .then(response => response.json())
        .then(posts => dispatch({type: 'FETCH_POSTS', posts}))
    }
}

export const addPost = post => {
    return {
        type: 'ADD_POST',
        post
    }
}

export function fetchSinglePost(postId) {
    return(dispatch) => {
        dispatch({type: 'START_ADDING_POSTS_REQUEST'})
        return fetch(`${BASEURL}/api/posts/${postId}`)
        .then(response => response.json())
        .then(post => dispatch({type: 'ADD_SINGLE_POST', post}))
    }
}


export function createPost(post) {
    return dispatch => {
        return fetch(`${BASEURL}/api/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({post:post})
        })
        .then(response => response.json())
        .then(post => {
            dispatch(addPost(post))
        })

    }
 }


 export function updateLikes(id, likes) {
     return (dispatch) => {
         const post_likes = {
             likes: likes
         }
         return fetch(`${BASEURL}/api/posts/${id}`, {
             method: "PATCH",
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({post: post_likes})
         })
         .then(response => {
             console.log(response)
            response.json()})
         .then(post => {
             
             dispatch(updatePost(post));
         })
     }
 }

 function updatePost(post) {
     return {
         type: 'UPDATE_LIKES_SUCCESS',
         post
     }
 }
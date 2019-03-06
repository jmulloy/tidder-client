const BASEURL = "https://tidderapi.herokuapp.com"

export function fetchComments() {
    return (dispatch) => {
        dispatch({type: 'START_ADDING_COMMENTS_REQUEST'})
        return fetch(`${BASEURL}/api/comments`)
        .then(response => response.json())
        .then(comments => dispatch({type: 'ADD_COMMENTS', comments}))
    }
}

export const addComment = comment => {
    return {
        type: 'ADD_COMMENT',
        comment
    }
}

export function createComment(comment) {
    return dispatch => {
        return fetch(`${BASEURL}/api/comments`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({comment:comment})
        })
        .then(response => response.json())
        .then(comment => {

            dispatch(addComment(comment))})
    }
}
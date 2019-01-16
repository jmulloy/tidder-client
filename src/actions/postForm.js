

export const updatePostFormData = PostFormData => {
    return {
        type: 'UPDATED_DATA',
        PostFormData
    }
}

export const resetPostForm = () => {
    return {
        type: 'RESET_POST_FORM'
    }
}
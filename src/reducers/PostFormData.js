export default (state = {
    title: '',
    author: '',
    content: ''
}, action) => {

    switch ( action.type ) {
        case 'UPDATE_DATA':
         return action.postFormData

        default:
            return state;
    }
}
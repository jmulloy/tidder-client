export default (state = {
    title: '',
    author: '',
    content: ''
}, action) => {

    switch ( action.type ) {
        case 'UPDATE_DATA':
         return action.PostFormData

        default:
            return state;
    }
}
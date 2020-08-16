const firstnamereducer = function user(state = null, action) {
    console.log(action)
    switch (action.type) {
        case "FIRST_NAME_CLICKED":
            return action.payload;
           
        default:
            break;
    }
    return state
}



export default firstnamereducer
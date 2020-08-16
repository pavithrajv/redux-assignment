const lastnamereducer = function user(state = null, action) {
    console.log(action)
    switch (action.type) {
        case "LAST_NAME_CLICKED":
            return action.payload;
           
        default:
            break;
    }
    return state
}



export default lastnamereducer
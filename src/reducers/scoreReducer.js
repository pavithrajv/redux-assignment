const scorereducer = function user(state = null, action) {
    console.log(action)
    switch (action.type) {
        case "SCORE_CLICKED":
            return action.payload;
           
        default:
            break;
    }
    return state
}



export default scorereducer
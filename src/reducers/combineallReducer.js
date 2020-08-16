import firstnamereducer from "./firstnameReducer";
import lastnamereducer from "./lastnameReducer";
import scorereducer from "./scoreReducer";

const { combineReducers } = require("redux");


const allreducers = combineReducers({
    firstName : firstnamereducer,
    lastName : lastnamereducer,
    Score : scorereducer
})

export default allreducers
import { combineReducers } from "redux";
import testSlice from "./testSlice";


const reducers = combineReducers({
    test: testSlice
})

export default reducers
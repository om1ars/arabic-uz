import { combineReducers } from "redux";
import testSlice from "./testSlice";


const reducers = combineReducers({
    test: testSlice,
    singleQuran: SingleQ
})

export default reducers
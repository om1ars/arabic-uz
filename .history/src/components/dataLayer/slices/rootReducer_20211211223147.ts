import { combineReducers } from "redux";
import singleQuranSlice from "./singleQuranSlice";
import testSlice from "./testSlice";


const reducers = combineReducers({
    test: testSlice,
    singleQuran: singleQuran
})

export default reducers
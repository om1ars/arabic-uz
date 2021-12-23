import { combineReducers } from "redux";
import singleQuran from "./singleQuranSlice";
import testSlice from "./testSlice";


const reducers = combineReducers({
    test: testSlice,
    singleQuran: singleQuran,
    singleAudio: singleAu
})

export default reducers
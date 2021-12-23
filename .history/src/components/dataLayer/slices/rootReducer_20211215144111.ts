import { combineReducers } from "redux";
import   singleAudioReducer  from "./fetchAudioSlice";
import singleQuran from "./singleQuranSlice";
import testSlice from "./testSlice";

const reducers = combineReducers({
  test: testSlice,
  singleQuran: singleQuran,
  singleAudio: singleAudioReducer,
  sidebar: sidebarSlice
});

export default reducers;

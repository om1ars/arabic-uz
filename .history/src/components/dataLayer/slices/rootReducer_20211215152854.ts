import { combineReducers } from "redux";
import adminSlice from "./adminSlice";
import   singleAudioReducer  from "./fetchAudioSlice";
import sidebarSlice from "./sidebarSlice";
import singleQuran from "./singleQuranSlice";
import testSlice from "./testSlice";

const reducers = combineReducers({
  test: testSlice,
  singleQuran: singleQuran,
  singleAudio: singleAudioReducer,
  sidebar: sidebarSlice,
  admin:  adminSlice
});

export default reducers;

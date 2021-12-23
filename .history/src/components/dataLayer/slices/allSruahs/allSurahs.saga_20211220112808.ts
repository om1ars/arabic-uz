import { take, all } from "redux-saga/effects";

function* getSurahsWatcher() {
    
}

export function* getSurahsSaga() {
  yield all([getSurahsWatcher]);
}

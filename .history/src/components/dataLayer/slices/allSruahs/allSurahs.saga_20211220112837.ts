import { take, all } from "redux-saga/effects";

function* getSurahsWatcher() {
    const data = yield call
}

export function* getSurahsSaga() {
  yield all([getSurahsWatcher]);
}

import { take, all, call } from "redux-saga/effects";

function* getSurahsWatcher() {
    const data = yield call()
}

export function* getSurahsSaga() {
  yield all([getSurahsWatcher]);
}

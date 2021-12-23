import { take, all, call } from "redux-saga/effects";
import { getAllSurahsFfromApi } from "../../../../utils/api";

function* getSurahsWatcher() {
    const data = yield call(getAllSurahsFfromApi)
}

export function* getSurahsSaga() {
  yield all([getSurahsWatcher]);
}

import { take, all, call, put } from "redux-saga/effects";
import { getAllSurahsFfromApi } from "../../../../utils/api";

function* getSurahsWatcher():any {
    const data = yield call(getAllSurahsFfromApi)
    yield put(getP)
}

export function* getSurahsSaga() {
  yield all([getSurahsWatcher]);
}

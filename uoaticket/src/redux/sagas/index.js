import { take, takeLatest, call } from "redux-saga/effects"
import * as action from "../actions"
import * as api from "../../api"

function* fetchUserSaga(action){
    const users = yield call(api.fetchUser)
    console.log('[users]', users)
}

function* getUserSuccess(action){
    const users = yield call(api.fetchUser)
    console.log('[users]', users)
}

function* mySaga() {
    yield takeLatest(action.getUser.getUserRequest, fetchUserSaga)
    yield takeLatest(action.getUser.getUserSuccess, getUserSuccess)
}

export default mySaga
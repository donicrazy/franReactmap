import axios from 'axios';
import { put, all, takeLatest } from 'redux-saga/effects'
import {  SIGNIN_USER, GET_TRUCKS_REQUEST, signInSucess, signInFailure, getTrucksSuccess,getTrucksFail } from '../action';

const baseUrl = 'http://localhost:4000';
function* doSignIn(action){
    try {
        console.log(action.payload)
        const data =  yield axios.post(`${baseUrl}/auth`, action.payload).then(response => response.data)
        if ( !data.error ) {
            yield put(signInSucess({username:action.payload.username, ids:data}));

           action.payload.success();
        }
        else 
            yield put(signInFailure(data.error));
     } catch (error) {
        yield put(signInFailure(error))
     }
}

function* doGetTrucks(action){
    try {
        console.log("saga", action);
        let data = yield axios.post(`${baseUrl}/trucks`, action.payload).then(response => response.data);
        console.log("trucks", action.payload, data);
        yield put(getTrucksSuccess(data))
     } catch (error) {
        yield put(getTrucksFail("There are no trucks for user"))
     }
}


export default function* rootSaga() {
    yield all([
        takeLatest(SIGNIN_USER, doSignIn),
        takeLatest(GET_TRUCKS_REQUEST, doGetTrucks)
    ]);
}
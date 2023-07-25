import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchCondition(action) {
    try {
        console.log("fetching conditions and url from the database")
        const conditionResponse = yield axios.get(`/condition/${action.payload}`);
        console.log("action payload is>>>>>", action.payload);
        //Dispatching action to set the retrived condition and image url into the condition reducer 
        yield put ({ type: "SET_CONDITION", payload: conditionResponse.data});
        crossOriginIsolated.log("conditionResponse.data is >>>>>", conditionResponse.data)
    } catch (error) {
        console.log("error fetching condition data from the database", error)
    }
}

function* conditionSaga() {
yield takeLatest("GET_CONDITION", fetchCondition);
}

export default conditionSaga;
import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import FormData from 'form-data';

function* fetchCondition(action) {
    try {
     //   console.log("fetching conditions and url from the database, bongo", action.payload)


        const formData = new FormData();
        formData.append('image', action.payload.image);
        const headers = {'Content-Type': 'multipart/form-data'}


        const conditionResponse = yield axios.post(`/condition/`, formData, {headers});
        console.log("action payload is>>>>>", action.payload);
        //Dispatching action to set the retrieved condition and image url into the condition reducer 
        yield put ({ type: "SET_CONDITION", payload: conditionResponse.data});
        console.log("conditionResponse.data is >>>>>", conditionResponse.data)
    } catch (error) {
        console.log("error fetching condition data from the database", error)
    }
}

function* conditionSaga() {
yield takeLatest("GET_CONDITION", fetchCondition);
}

export default conditionSaga;
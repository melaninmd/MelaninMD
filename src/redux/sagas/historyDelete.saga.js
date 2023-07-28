import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

//This function will delete selected conditions from user's  saved condition history
//action.payload is carrying the data that needs to be deleted

function* deleteCondition(action) {
    try {
        console.log("action.payload is>>>>", action.payload);
//Making Delete request to remove conditions from history
yield axios.delete(`/history/diagnosis/${action.payload}`);
//Dispatching action to get updated history after deleting condition 
yield put({ type: "FETCH_HISTORY"});

    } catch (error) {
        console.log("error deleting conditions from the history", error);
    }
}
function* historyDeleteSaga() {
    yield takeLatest("DELETE_HISTORY", deleteCondition)
}
export default historyDeleteSaga;
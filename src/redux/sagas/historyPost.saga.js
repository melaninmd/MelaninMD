import axios from 'axios';
import {put, takeLatest} from  'redux-saga/effects';


function* fetchHistory() {
    try {
        const history = yield axios.get('/history/get')
        console.log('get ll the diagnosis history', history.data);
        yield put ({type: 'SET_HISTORY', payload: history.data})
    }
    catch(err) {
        console.log('Error Getting diagnosis history', err)
    }
}

function* historyPostSaga() {
    yield takeLatest('FETCH_HISTORY', fetchHistory);
    
}

export default historyPostSaga;
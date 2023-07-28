import axios from 'axios';
import {put, takeLatest} from  'redux-saga/effects';
import FormData from 'form-data';


function* postImage(action) {
    try {
        console.log(action.payload.image);

        const image = action.payload.image;
        const id = action.payload.id;

        

        const formData = new FormData();
        formData.append('image', image);
        const headers = {'Content-Type': 'multipart/form-data'};


        yield axios.post(`/history/post/${id}`, formData, {headers});
       
        yield put({type: 'FETCH_HISTORY'});
    }
    catch(err) {
        console.log('Error adding a photo', err);
    }
}

function* addImageSaga() {
    yield takeLatest('ADD_IMAGE', postImage);
    
}

export default addImageSaga;
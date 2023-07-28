import { useSelector, useDispatch } from "react-redux";
import './HistoryItem.css';
import { useState } from "react";

function HistoryItem(props) {
    const dispatch = useDispatch();
    const [showHistory, setShowHistory] = useState(false);
    const history = useSelector(store => store.historyReducer);
    let pictureArray = [];
    for (let pic of history.link) {
        if (pic.id === props.item.diagnosis_id) {
            pictureArray.push(pic.picture_link);
        }
    }

    const deleteFn = (id) => {
        dispatch({ type: 'DELETE_HISTORY', payload: id });
    }

    const handleArrow = () => {
        setShowHistory(!showHistory); 
    }

    return (
        <div className="diagnosisContainer">
            <button className="arrow-btn" onClick={handleArrow}>
                <div className="arrow"></div>
            </button>

            <p> Prediction: {props.item.prediction_name.map(name => name + " ")}</p>
         
            {showHistory && pictureArray.map((picture, i) => <img className="diagnosisPic" key={i} src={picture} />)}
            {showHistory &&  <>
                <button type='button' onClick={() => deleteFn(props.item.diagnosis_id)}>Delete</button>
            <button>Upload</button> </> }
            
        </div>
    );
}

export default HistoryItem;

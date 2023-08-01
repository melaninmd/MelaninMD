import { useSelector, useDispatch } from "react-redux";
import './HistoryItem.css';
import { useEffect, useState } from "react";
import DeleteConfirmation from "../DeleteConfirmation/DeleteConfirmation";
import { useHistory } from "react-router-dom";

function HistoryItem(props) {
    const dispatch = useDispatch();
    const ourHistory = useHistory();
    const [showHistory, setShowHistory] = useState(false);
    const [className, setClassName] = useState("arrow-down");
    const [showPopUp, setShowPopUp] = useState(false);
    const history = useSelector(store => store.historyReducer);
    let height;

    let predictionArr = [];
    



//grabbing the pictures and dates that go with each diagnosis
    let pictureArray=[];
    for(let pic of history.link){
        if(pic.id === props.item.diagnosis_id){
            pic.picture_link.forEach(element => {
                pictureArray.push(element)
            });

        }
    }
    let dateArray=[];
    for(let pic of history.link){
        if(pic.id === props.item.diagnosis_id){
            pic.date.forEach(element => {
                dateArray.push(element);
            });

        }
    }

    const deleteFn = (id) => {
        dispatch({ type: 'DELETE_HISTORY', payload: id });
        setShowPopUp(false);
    }


    const uploadFn = (event, id) =>{
        const image = event.target.files[0];
        const objToSend = {
            image,
            id
        }
        // console.log('here\'s our image', objToSend);
        dispatch({type: 'ADD_IMAGE', payload: objToSend});
    }

    const detailsFn = () => {
        const objToSend = {
            predictions: predictionArr,
            url:pictureArray[0], 
        }
        dispatch({type: 'SET_CONDITION', payload: objToSend})
        ourHistory.push('/prediction');
    }

    

    const handleArrow = () => {
        setShowHistory(!showHistory); 

        if(showHistory){
            height = '300px';
            setClassName("arrow-down");
            

        } else {
            height = '100px';
            setClassName("arrow-up");
        }
        
    }

    for (let i = 0; i<props.item.confidence.length; i++){
        const obj = {
            confidence: props.item.confidence[i], 
            icd: props.item.icd[i],
            name: props.item.prediction_name[i],
            readMoreUrl: props.item.prediction_link[i],
        }
        predictionArr.push(obj);
    }


    
    return (
        <div className="diagnosisContainer">




            <div className="arrow-btn" style={{height:{height}}}>


                <div className="top" onClick={handleArrow}>
                    <p>Prediction: {props.item.prediction_name.map(name => name + " ")}</p>
                    <div className="prediction-names">
                        <div className={className}></div>
                    </div>
                </div>

                <div className="middle">
                    {showHistory && pictureArray.map((picture, i) => 
                    <div key={i} className="picture-date-container">
                        <img className="diagnosisPic" src={picture} />
                        <p className="pictureDate">{dateArray[i]}</p>
                    </div>
                    )}
                </div>
            {showHistory &&  <>
                <br/>
                <div className="bottom">
                    
                    <button className="delete-btn history-btn" type='button' onClick={() => setShowPopUp(true)}>Delete</button>
                    <label className="update-btn history-btn">Update
                    <input className="update-input" name='photo' type="file" accept="image/*" onChange={(event)=>uploadFn(event, props.item.diagnosis_id)}/>
                    </label>
                    <button className="details-btn history-btn" onClick={()=>detailsFn()}>Details</button>
                    
                </div>
            </>}
            {showPopUp&&(
                <DeleteConfirmation onCancel={() => setShowPopUp(false)} onConfirm={()=>deleteFn(props.item.diagnosis_id)}/>
            )}
            
                
        
            </div>

            </div>


        
         
            
    );
}

export default HistoryItem;

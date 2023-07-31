import { useSelector, useDispatch } from "react-redux";
import './HistoryItem.css';
import { useState } from "react";
import DeleteConfirmation from "../DeleteConfirmation/DeleteConfirmation";

function HistoryItem(props) {
    const dispatch = useDispatch();
    const [showHistory, setShowHistory] = useState(false);
    const [className, setClassName] = useState("arrow-down");
    const [showPopUp, setShowPopUp] = useState(false);
    const history = useSelector(store => store.historyReducer);
    let height;
    



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
                    <button className="delete-btn" type='button' onClick={() => setShowPopUp(true)}>Delete</button>
                    <input className="update-input" name='photo' type="file" accept="image/*" onChange={(event)=>uploadFn(event, props.item.diagnosis_id)}/>
                    <label className="update-btn" htmlFor="update-input">Update</label>
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

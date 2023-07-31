import { useSelector, useDispatch } from "react-redux";
import './HistoryItem.css';
import { useState } from "react";

function HistoryItem(props) {
    const dispatch = useDispatch();
    const [showHistory, setShowHistory] = useState(false);
    const history = useSelector(store => store.historyReducer);


    let pictureArray=[];
    for(let pic of history.link){
        if(pic.id === props.item.diagnosis_id){
            pic.picture_link.forEach(element => {
                pictureArray.push(element)
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
    }


    return (
        <div className="diagnosisContainer">


            <button className="arrow-btn" onClick={handleArrow}>
                
                Prediction: {props.item.prediction_name.map(name => name + " ")}
 </button>
               
                <div className="prediction-names">
                <div className="arrow"></div>
                </div>
                
               
                {showHistory && pictureArray.map((picture, i) => <img className="diagnosisPic" key={i} src={picture} />)}
            {showHistory &&  <>
                <form>
                <button type='button' onClick={()=>deleteFn(props.item.diagnosis_id)}>Delete</button>
                <input name = 'photo' type="file" accept="image/*" onChange={(event)=>uploadFn(event, props.item.diagnosis_id)}/>
            </form> </>}
                
       
            


           
        
         
            
        </div>
    );
}

export default HistoryItem;

import { useSelector, useDispatch } from "react-redux";
import './HistoryItem.css';


function HistoryItem(props){
    const dispatch = useDispatch();
    const history = useSelector(store => store.historyReducer);
    let pictureArray=[];
    for(let pic of history.link){
        if(pic.id === props.item.diagnosis_id){
            pictureArray.push(pic.picture_link);
        }
    }

    const deleteFn = (id)=>{
        dispatch({type: 'DELETE_HISTORY', payload: id})
    }

    

    return(
        <div className="diagnosisContainer">
            <p>{props.item.prediction_name.map(name=> name + " ")}</p>
            <button>arrow</button>
            {pictureArray.map((picture, i) => <img className="diagnosisPic" key={i} src={picture}/>)}

            <button type='button' onClick={()=>deleteFn(props.item.diagnosis_id)}>Delete</button>

            <button>Upload</button>
            

        </div>

    )
}

export default HistoryItem;


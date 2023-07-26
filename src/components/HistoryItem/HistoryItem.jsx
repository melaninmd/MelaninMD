import { useSelector } from "react-redux";
import './HistoryItem.css';


function HistoryItem(props){
    const history = useSelector(store => store.historyReducer);
    let pictureArray=[];
    for(let pic of history.link){
        if(pic.id === props.item.diagnosis_id){
            pictureArray.push(pic.picture_link);
        }
    }

    return(
        <div className="diagnosisContainer">
            <p>{props.item.prediction_name.map(name=> name + " ")}</p>
            {pictureArray.map((picture, i) => <img className="diagnosisPic" key={i} src={picture}/>)}
            

        </div>

    )
}

export default HistoryItem;
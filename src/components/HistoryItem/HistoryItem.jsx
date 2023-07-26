import { useSelector } from "react-redux";



function HistoryItem(props){
    const history = useSelector(store => store.historyReducer);
    let pictureArray=[];
    for(let pic of history.link){
        if(pic.id === props.item.diagnosis_id){
            pictureArray.push(pic.picture_link);
        }
    }

    return(
        <div>
            {pictureArray.map((picture, i) => <img key={i} src={picture}/>)}
            

        </div>

    )
}

export default HistoryItem;
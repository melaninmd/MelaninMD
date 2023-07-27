import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Prediction.css'
function DiagnosisResult() {
    const dispatch = useDispatch();
    const conditionReducer = useSelector((store) => store.conditionReducer);
   
    function readMore (condition) {
        window.location.href = condition.readMoreUrl;


    }


    return(
        <>
        <h2>Result</h2>
        <img className="image-container" src={conditionReducer.url}/>
        {conditionReducer.predictions?.map((condition, i) => {
            return(
                <div className="data-container">
                    <b className="condition-name">{condition.name}</b> 
                    <button onClick={()=> readMore(condition)}>Read More</button> 
                   
                    {/* <p>{condition.confidence}</p> */}
                </div>
               
               

            )
           
        })}
        <div className="data-container">
        <b className="condition-name">Acne</b>
        <button src="https://www.loveshackfancy.com/collections/new-arrivals">read more</button>
        </div>
        <div className="data-container">
        <b className="condition-name">dermatiittititfdfddfgfgfgfgfd</b>
        <button src="https://www.loveshackfancy.com/collections/new-arrivals">read more</button>
        </div>

        </>
    )
}
export default DiagnosisResult
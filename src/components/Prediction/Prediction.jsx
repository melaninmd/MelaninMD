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
        <p>Result</p>
        <img className="image-container" src={conditionReducer.url}/>
        {conditionReducer.predictions?.map((condition, i) => {
            return(
                <div className="data-container">
                    <p>{condition.name}</p> 
                    <button onClick={()=> readMore(condition)}>Read More</button> 
                   
                    {/* <p>{condition.confidence}</p> */}
                </div>
               
               

            )
           
        })}
        <div className="data-container">
        <p>acne</p>
        <button src="https://www.loveshackfancy.com/collections/new-arrivals">read more</button>
        </div>

        </>
    )
}
export default DiagnosisResult
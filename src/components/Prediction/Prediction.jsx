import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function DiagnosisResult() {
    const dispatch = useDispatch();
    const conditionReducer = useSelector((store) => store.conditionReducer);

    useEffect(() => {
        //load the diagnosis result on page load
        dispatch({ type: "GET_CONDITION"})
    }, []);

    //Dispatching action to add condition to history
    const addToHistory = (condition) => {
        dispatch({ type: "FETCH_HISTORY", payload: condition})
    }

    return(
        <>
        <p>Result</p>
        {conditionReducer?.map((condition, i) => {
            return(
                <div>
                    <img>{condition.prediction.url}</img>
                    <p>{condition.prediction.name}</p> 
                    <p>{condition.prediction.readMoreUrl}</p> 
                    <div>
                        <button
                        onClick={() => addToHistory(condition)}
                        type= "button"
                        > save

                        </button>
                    </div>
                </div>
               
               

            )
        })}

        </>
    )
}
export default DiagnosisResult